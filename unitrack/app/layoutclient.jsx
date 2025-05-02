"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";

import NavBar from "@/app/components/NavBar";

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const hideNavbarRoutes = ["/"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(pathname);

  return (
    <>
      {shouldShowNavbar && user && <NavBar user={user} />}
      {children}
    </>
  );
}
