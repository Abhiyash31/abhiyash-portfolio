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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-line bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="/"
          onClick={goTo("/#top")}
          className="font-mono text-xs uppercase tracking-[0.2em] text-text"
        >
          {site.shortName}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={goTo(item.href)}
              className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={site.socials.resume}
            target="_blank"
            className="rounded-full border border-line-strong px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-text transition-colors hover:border-accent hover:text-accent"
          >
            Résumé
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs uppercase tracking-[0.2em] text-text md:hidden"
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
            className="flex h-[100dvh] flex-col justify-center gap-2 px-6 md:hidden"
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
                  className="font-display text-5xl text-text"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href={site.socials.resume}
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent"
            >
              Résumé ↗
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
