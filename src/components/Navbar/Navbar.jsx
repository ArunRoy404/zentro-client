"use client";

import React from "react";
import DesktopNavigation from "./DesktopNavigation";
import NavAuthentication from "./NavAuthentication";
import Logo from "../ui/Logo";
import { usePathname } from "next/navigation";
import { DrawerNavbar } from "./DrawerNavbar";
import AvatarUser from "../shared/AvatarUser/AvatarUser";
import { useSession } from "next-auth/react";
import ThemeToggle from "../Toggle/ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();

  if (
    pathname.includes("/dashboard") ||
    pathname.includes("/signin") ||
    pathname.includes("/registration")
  ) {
    return <></>;
  }

  return (
    <header className="bg-white fixed w-full z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4  transition-all duration-500">
        {/* logo  */}
        <Logo variant={"primary"} />

        {/* Desktop Navigation */}
        <DesktopNavigation />

        <div className="hidden lg:block">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {
              session.status === "authenticated" ? (
                <AvatarUser /> //user avatar
              ) : (
                <NavAuthentication />
              ) //authentication navigation
            }
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <DrawerNavbar />
        </div>
      </nav>

      {/* Mobile Menu */}
    </header>
  );
};

export default Navbar;
