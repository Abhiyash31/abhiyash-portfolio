import Link from "next/link";
import { site } from "@/content/site";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true,
} as const;

const GitHubIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const MailIcon = () => (
  <svg {...iconProps} stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

const DocIcon = () => (
  <svg {...iconProps} stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  const social = [
    { label: "GitHub", href: site.socials.github, icon: <GitHubIcon /> },
    ...(site.socials.linkedin
      ? [{ label: "LinkedIn", href: site.socials.linkedin, icon: <LinkedInIcon /> }]
      : []),
    { label: "Email", href: `mailto:${site.contact.emails[0]}`, icon: <MailIcon /> },
    { label: "Resume", href: site.socials.resume, icon: <DocIcon /> },
  ];

  return (
    <footer id="contact" className="border-t border-line px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
          ✦ Contact
        </p>
        <h2 className="mt-6 max-w-3xl font-display text-3xl leading-[1.05] tracking-tight text-text sm:text-5xl">
          Let&rsquo;s build something that has to{" "}
          <span className="italic text-accent">work</span>.
        </h2>

        <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
          {site.contact.emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="link-underline text-lg text-text"
            >
              {email}
            </a>
          ))}
          <a href={site.contact.phoneHref} className="link-underline text-lg text-muted">
            {site.contact.phone}
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {social.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group inline-flex items-center gap-3 rounded-full border border-line px-5 py-3 font-mono text-[13px] uppercase tracking-[0.16em] text-muted transition-colors hover:border-line-strong hover:text-text"
            >
              <span className="text-faint transition-colors group-hover:text-accent">
                {s.icon}
              </span>
              {s.label}
            </Link>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-muted">
              © {year} {site.name}
            </p>
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
              All systems operational
            </p>
          </div>
          <Link
            href="#top"
            className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
