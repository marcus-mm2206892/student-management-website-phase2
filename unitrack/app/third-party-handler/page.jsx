"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getUserByEmailAction } from "../action/server-actions";
import AlertModal from "../components/AlertModal";

export default function ThirdPartyHandler() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");

  const showAlert = (title, description, url = "") => {
    setModalTitle(title);
    setModalDescription(description);
    setRedirectUrl(url); // set URL to redirect to after modal OK
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    if (redirectUrl) {
      router.push(redirectUrl);
    }
  };

  useEffect(() => {
    const redirectUser = async () => {
      if (status === "authenticated") {
        try {
          const user = await getUserByEmailAction(session.user.email);

          if (!user) {
            showAlert("Login Error", "No account found. Please contact admin.", "/");
            return;
          }

          localStorage.setItem("user", JSON.stringify(user));

          const homeUrl = `/${user.role}/home?firstName=${encodeURIComponent(
            user.firstName
          )}&lastName=${encodeURIComponent(user.lastName)}&email=${encodeURIComponent(
            user.email
          )}&role=${user.role}&profileImage=${encodeURIComponent(user.profileImage)}`;
          
          router.push(homeUrl);
        } catch (err) {
          console.error("Error fetching user data:", err);
          showAlert("Server Error", "Error logging in. Please try again.", "/");
        }
      }
    };

    redirectUser();
  }, [status, session, router]);

  return (
    <>
      <AlertModal
        title={modalTitle}
        description={modalDescription}
        isOpen={modalOpen}
        onClose={handleModalClose}
      />
    </>
  );
}
