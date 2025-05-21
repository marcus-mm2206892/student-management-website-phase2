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

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        userObj = JSON.parse(storedUser);
      } catch {
        localStorage.removeItem("user");
      }
    }

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

  useEffect(() => {
    const body = document.body;
    if (pathname === '/') {
      body.classList.add('login-page');
    } else {
      body.classList.remove('login-page');
    }
  }, [pathname]);

  const isLoginPage = pathname === "/";
  const shouldShowNavAndFooter = !isLoginPage && user;

  if (!isLoaded) return null;

  return (
    <>
      {shouldShowNavAndFooter && <NavBar user={user} />}
      <SessionProvider>
        {children}
      </SessionProvider>
      <ScrollUpButton />
      {shouldShowNavAndFooter && <Footer user={user} />}
    </>
  );
}
