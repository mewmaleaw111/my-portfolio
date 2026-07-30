import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
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

        {/* Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>
        </div>

        {/* Theme */}
        <ThemeToggle />

      </div>
    </nav>
  );
}