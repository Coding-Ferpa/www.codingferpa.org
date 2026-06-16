"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/Button";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import icon from "@/app/assets/icon.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 isolate"
      style={{ height: "var(--header-height)" }}
    >
      <div
        className={`absolute inset-0 transition-all duration-base pointer-events-none ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
        aria-hidden
      />

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
          aria-label="Coding Ferpa — página inicial"
        >
          <Image
            src={icon}
            alt="Logo Coding Ferpa"
            width={40}
            height={40}
            className="relative z-10 h-10 w-auto"
            priority
          />
          
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {NAV_LINKS.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-caption font-medium text-text-secondary hover:text-text-primary transition-colors duration-fast"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-caption font-medium text-text-secondary hover:text-text-primary transition-colors duration-fast"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href={WHATSAPP_URL}
            external
            variant="primary"
            className="hidden sm:inline-flex text-caption px-4 py-2"
            ariaLabel="Participe — entrar no grupo do WhatsApp"
          >
            Participe
          </Button>

          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-md text-text-primary hover:bg-bg-elevated transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="md:hidden absolute top-full left-0 right-0 z-10 bg-bg-primary/95 backdrop-blur-md border-b border-border px-4 py-4 flex flex-col gap-1"
          aria-label="Navegação mobile"
        >
          {NAV_LINKS.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 px-2 text-body text-text-secondary hover:text-text-primary border-b border-border transition-colors duration-fast"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="py-3 px-2 text-body text-text-secondary hover:text-text-primary border-b border-border transition-colors duration-fast"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <Button
            href={WHATSAPP_URL}
            external
            variant="primary"
            className="mt-3 w-full"
            ariaLabel="Participe — entrar no grupo do WhatsApp"
          >
            Participe
          </Button>
        </nav>
      )}
    </header>
  );
}
