"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function WebmekaNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "#" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Navbar className="top-5">
      {/* Desktop Navbar */}
      <NavBody className="px-5 py-4">
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton href="#contact">Contact Us</NavbarButton>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav className="py-4">
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="block text-lg text-neutral-700 dark:text-neutral-200"
            >
              {item.name}
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
