"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";
import NavBar from "@/app/components/NavBar";

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

    // If not available, use query params (e.g., after login redirect)
    if (!userObj) {
      const name = searchParams.get("name");
      const email = searchParams.get("email");
      const role = searchParams.get("role");

      if (name && email && role) {
        userObj = { name, email, role };
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
      {children}
    </>
  );
}
