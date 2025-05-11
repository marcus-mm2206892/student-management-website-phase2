"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import ScrollUpButton from "./components/ScrollUpButton";
import Footer from "@/app/components/Footer";
import { SessionProvider } from "next-auth/react";

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let userObj = null;

    // Try loading from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        userObj = JSON.parse(storedUser);
      } catch {
        localStorage.removeItem("user");
      }
    }

    // Fallback to URL query if needed (e.g., post-login redirect)
    if (!userObj) {
      const firstName = searchParams.get("firstName");
      const lastName = searchParams.get("lastName");
      const email = searchParams.get("email");
      const role = searchParams.get("role");
      const profileImage = searchParams.get("profileImage");

      if (firstName && lastName && email && role) {
        userObj = { firstName, lastName, email, role, profileImage };
        localStorage.setItem("user", JSON.stringify(userObj));
      }
    }

    setUser(userObj || null);
    setIsLoaded(true);
  }, [searchParams]);

  const hideNavbarRoutes = ["/"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(pathname);

  if (!isLoaded) return null;

  return (
    <>
      {shouldShowNavbar && user && <NavBar user={user} />}
      <SessionProvider>
        {children}
      </SessionProvider>
      <ScrollUpButton />
      <Footer user={user} />
    </>
  );
}
