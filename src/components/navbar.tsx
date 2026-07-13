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
} from "@/components/ui/resizable-navbar";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SocialLinks from "@/components/ui/socials"

export default function WebmekaNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll, { passive: true }); 
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    // { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact-us" },
  ];

  return (
    <Navbar className="top-0">
      <NavBody className="px-5 py-4">
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="relative z-20 hidden lg:block">
          <SocialLinks />
        </div>
      </NavBody>

      <MobileNav className="py-4">
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>
      <div ref={menuRef}>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="block text-lg text-neutral-200"
            >
              {item.name}
            </Link>
          ))}
          <div className="mb-8"><SocialLinks /></div>
        </MobileNavMenu>
      </div>
      </MobileNav>
    </Navbar>
  );
}
