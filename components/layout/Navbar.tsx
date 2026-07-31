"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#"
          className="font-semibold text-foreground"
        >
          Mew Pakin
        </a>


        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-muted transition hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>


        {/* Right Side */}
        <div className="flex items-center gap-3">

          <ThemeToggle />


          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="border-t px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">

            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-primary"
              >
                {item.name}
              </a>
            ))}

          </div>
        </div>
      )}

    </nav>
  );
}