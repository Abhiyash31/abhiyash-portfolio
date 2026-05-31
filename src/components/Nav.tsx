"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/content/site";

export function Nav() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const goTo = (href: string) => (e: React.MouseEvent) => {
    setOpen(false);
    const hash = href.includes("#") ? href.split("#")[1] : "";
    if (pathname === "/" && hash) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { offset: -90 });
      else el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-line bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          onClick={goTo("/#top")}
          className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-text"
        >
          <span className="grid h-7 w-7 place-items-center rounded border border-line-strong text-accent">
            A
          </span>
          {site.shortName}
          <span className="text-faint">v2.0</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={goTo(item.href)}
              className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                isActive(item.href)
                  ? "border-b border-accent pb-1 text-accent"
                  : "text-muted hover:text-text"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={site.socials.resume}
            target="_blank"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-text"
          >
            Resume
          </Link>
          <a
            href={`mailto:${site.contact.emails[0]}`}
            className="bg-accent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-bg transition-all hover:opacity-80 active:scale-95"
          >
            Get in touch
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-text md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-[100dvh] flex-col justify-center gap-2 bg-bg px-6 md:hidden"
          >
            {site.nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={goTo(item.href)}
                  className="font-display text-4xl text-text"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href={site.socials.resume}
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-accent"
            >
              Resume ↗
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
