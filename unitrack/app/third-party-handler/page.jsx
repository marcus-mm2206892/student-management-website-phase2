"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getUserByEmailAction } from "../action/server-actions"; // ✅ use your existing function

export default function ThirdPartyHandler() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const redirectUser = async () => {
      if (status === "authenticated") {
        try {
          const user = await getUserByEmailAction(session.user.email);

          if (!user) {
            alert("No account found. Please contact admin.");
            router.push("/");
            return;
          }
          
          localStorage.setItem("user", JSON.stringify(user));

          router.push(
            `/${user.role}/home?firstName=${encodeURIComponent(user.firstName)}&lastName=${encodeURIComponent(user.lastName)}&email=${encodeURIComponent(user.email)}&role=${user.role}&profileImage=${encodeURIComponent(user.profileImage)}`
          );
        } catch (err) {
          console.error("Error fetching user data:", err);
          alert("Error logging in.");
        }
      }
    };

    redirectUser();
  }, [status, session, router]);

  return <p>Loading...</p>;
}
