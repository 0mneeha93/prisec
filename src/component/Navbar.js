import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl px-6 py-2 rounded-full bg-sky-700/30 backdrop-blur-md border border-white/10 shadow-lg flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <span className="text-white text-lg md:text-xl font-bold font-montserrat tracking-wide">
           <span className="hover:text-blue-950 transition cursor-pointer">PRISEC</span>
          </span>
        </Link>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-white font-medium text-sm font-montserrat">
           <Link href="/projects"><span className="hover:text-blue-950 transition cursor-pointer">Projects</span>
           </Link>
           <Link href="/concepts"><span className="hover:text-blue-950 transition cursor-pointer">Future Vision</span>
           </Link>
          <Link href="/team"><span className="hover:text-blue-950 transition cursor-pointer">Team PRISEC</span>
          </Link>
          <Link href="/#About" scroll={true}>
            <span className="hover:text-blue-950 transition cursor-pointer">About Us</span>
          </Link>
          <Link href="/#contact" scroll={true}>
            <span className="hover:text-blue-950 transition cursor-pointer">Contact Us</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden fixed top-[75px] left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm bg-sky-950/40 rounded-xl py-4 px-6 shadow-xl text-white font-montserrat text-base space-y-3 flex flex-col items-start">
          {[
            { href: "/projects", label: "Projects" },
            { href: "/concepts", label: "Future Vision" },
            { href: "/team", label: "Team PRISEC" },
            { href: "/#About", label: "About Us", scroll: true },
            { href: "/#contact", label: "Contact Us", scroll: true },
          ].map((link) => (
            <Link
            key={link.label}
            href={link.href}
            scroll={link.scroll}
            onClick={() => setMenuOpen(false)}
            className="w-full px-3 py-2 rounded-md hover:bg-sky-200 transition duration-150"
          >
            {link.label}
          </Link>

          ))}
        </div>
      )}
    </>
  );
}
