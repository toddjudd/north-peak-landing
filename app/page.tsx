/* ------------------------------------------------------------------ */
/*  EDIT ME                                                           */
/*  Update this info once and it flows through the whole page.        */
/* ------------------------------------------------------------------ */

const BUSINESS = {
  name: "North Peak",
  tagline: "Protecting what's under your roof",
  phone: "(555) 555-0123",
  phoneHref: "tel:+15555550123",
  email: "hello@northpeak.com",
  emailHref: "mailto:hello@northpeak.com",
  address: "123 Main Street, Anytown, USA",
  hours: "Mon–Sat: 8:00 AM – 6:00 PM",
  license: "Licensed & Insured · #NP-000000",
};

/* ------------------------------------------------------------------ */

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Highlights />
        <About />
        <Results />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

/* -------------------------------- Header -------------------------------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt={`${BUSINESS.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-lg font-bold tracking-tight text-navy-900">
            {BUSINESS.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#about" className="transition hover:text-navy-900">
            About
          </a>
          <a href="#results" className="transition hover:text-navy-900">
            Our Work
          </a>
          <a href="#testimonials" className="transition hover:text-navy-900">
            Reviews
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-navy-900 px-4 py-2 text-white transition hover:bg-navy-800"
          >
            Get a Free Quote
          </a>
        </nav>

        <a
          href={BUSINESS.phoneHref}
          className="rounded-lg bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-800 md:hidden"
        >
          Call Us
        </a>
      </div>
    </header>
  );
}

/* --------------------------------- Hero --------------------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #55709f 0%, transparent 45%), radial-gradient(circle at 80% 70%, #223560 0%, transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 md:py-32">
        <Image
          src="/logo.svg"
          alt={`${BUSINESS.name} logo`}
          width={96}
          height={96}
          className="mx-auto mb-8 h-24 w-24 drop-shadow-lg"
        />

        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {BUSINESS.tagline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-100">
          Since day one, {BUSINESS.name} has kept homes and families dry,
          safe, and comfortable. We handle roofs, gutters, and everything
          above you — with honest workmanship and lasting results.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-lg bg-white px-8 py-4 text-base font-semibold text-navy-900 transition hover:bg-slate-100 sm:w-auto"
          >
            Get a Free Estimate
          </a>
          <a
            href="#results"
            className="w-full rounded-lg border border-navy-300/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            See Our Work
          </a>
        </div>

        <p className="mt-8 text-sm text-navy-200">{BUSINESS.license}</p>
      </div>
    </section>
  );
}

/* ------------------------------ Highlights ------------------------------ */

function Highlights() {
  const items = [
    {
      title: "Free Estimates",
      text: "No-pressure quotes, no hidden fees, no obligation.",
      icon: "ReceiptText",
    },
    {
      title: "Licensed & Insured",
      text: "Fully certified for every job, big or small.",
      icon: "ShieldCheck",
    },
    {
      title: "Years of Experience",
      text: "Thousands of roofs inspected and restored.",
      icon: "Star",
    },
    {
      title: "Workmanship Warranty",
      text: "We stand behind our work, long after we're gone.",
      icon: "BadgeCheck",
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50">
              <Icon name={item.icon} className="h-6 w-6 text-navy-800" />
            </div>
            <div>
              <h3 className="font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- About -------------------------------- */

function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-500">
            About Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Your roof is the first line of defense — treat it that way
          </h2>

          {/* Replace this paragraph with your story */}
          <div className="mt-6 space-y-4 text-slate-600">
            <p>
              {BUSINESS.name} is a family-owned company built on a simple
              belief: protect what matters most. For years we've helped
              homeowners across the area keep their roofs, gutters, and
              exteriors in top shape — through storms, seasons, and time.
            </p>
            <p>
              From full roof replacements and repairs to inspections and
              maintenance, every job starts the same way: a thorough look at
              your property, honest recommendations, and a fair, transparent
              price. No pressure, no shortcuts — just work we're proud to put
              our name on.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {[
              "Roof inspection, repair & replacement",
              "Gutter cleaning & installation",
              "Storm damage & insurance claims support",
              "Preventative maintenance plans",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-900">
                  <CheckIcon className="h-3 w-3 text-white" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <Image
            src="/photos/about.svg"
            alt="A home protected by North Peak"
            width={640}
            height={480}
            className="w-full rounded-2xl border border-slate-200 shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-slate-200 bg-white p-5 shadow-lg sm:block">
            <p className="text-3xl font-extrabold text-navy-900">1000+</p>
            <p className="text-sm text-slate-500">Homes protected</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Results ------------------------------- */

function Results() {
  const pairs = [
    {
      before: "/photos/before-1.svg",
      after: "/photos/after-1.svg",
      caption: "Storm-damaged roof, fully restored",
    },
    {
      before: "/photos/before-2.svg",
      after: "/photos/after-2.svg",
      caption: "Roof replacement & gutter install",
    },
  ];

  return (
    <section id="results" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-500">
            Our Work
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Real projects. Real results.
          </h2>
          <p className="mt-4 text-slate-600">
            Replace these placeholders with your before &amp; after photos to
            show the transformation.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {pairs.map((pair) => (
            <figure key={pair.caption}>
              <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                <Photo src={pair.before} label="Before" />
                <Photo src={pair.after} label="After" />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium text-slate-600">
                {pair.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Photo({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={`${label} ${BUSINESS.name} project photo`}
        width={400}
        height={300}
        className="h-full w-full object-cover"
      />
      <span className="absolute left-2 top-2 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        {label}
      </span>
    </div>
  );
}

/* ----------------------------- Testimonials ----------------------------- */

function Testimonials() {
  const reviews = [
    {
      quote:
        "They replaced our roof after a bad storm and the difference is night and day. Clean crew, fair price, done on schedule.",
      name: "Sarah M.",
      place: "Homeowner",
    },
    {
      quote:
        "Honest and professional from the first call. They found issues the other guy missed — and saved us money fixing them.",
      name: "Mike T.",
      place: "Homeowner",
    },
    {
      quote:
        "North Peak added gutters and sealed our valleys before winter. No leaks, no worries. Would recommend to anyone.",
      name: "Rachel H.",
      place: "Homeowner",
    },
  ];

  return (
    <section id="testimonials" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-500">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            What our customers say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-1 text-amber-400" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-slate-600">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-semibold text-navy-900">{r.name}</p>
                <p className="text-sm text-slate-500">{r.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Contact ------------------------------- */

function Contact() {
  const channels = [
    {
      label: "Call or Text",
      value: BUSINESS.phone,
      href: BUSINESS.phoneHref,
      icon: "Phone",
    },
    {
      label: "Email Us",
      value: BUSINESS.email,
      href: BUSINESS.emailHref,
      icon: "Mail",
    },
    {
      label: "Visit Us",
      value: BUSINESS.address,
      href: "https://maps.google.com",
      icon: "MapPin",
    },
    {
      label: "Open Hours",
      value: BUSINESS.hours,
      icon: "Clock",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 10%, #55709f 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-navy-200">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to protect what's under your roof?
          </h2>
          <p className="mt-4 text-navy-100">
            Reach out for a free, no-pressure estimate. We usually respond
            within one business day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => {
            const inner = (
              <>
                <Icon
                  name={c.icon}
                  className="mx-auto h-7 w-7 text-navy-200"
                />
                <p className="mt-3 text-sm text-navy-200">{c.label}</p>
                <p className="mt-1 font-semibold">{c.value}</p>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-white/25 hover:bg-white/10"
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.label}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                {inner}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={BUSINESS.phoneHref}
            className="w-full rounded-lg bg-white px-8 py-4 text-center text-base font-semibold text-navy-900 transition hover:bg-slate-100 sm:w-auto"
          >
            {BUSINESS.phone}
          </a>
          <a
            href={BUSINESS.emailHref}
            className="w-full rounded-lg border border-navy-300/40 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            {BUSINESS.email}
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="bg-navy-950 py-8 text-sm text-navy-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6">
        <p className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt={`${BUSINESS.name} logo`}
            width={24}
            height={24}
            className="h-6 w-6"
          />
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
        <p>{BUSINESS.license}</p>
      </div>
    </footer>
  );
}

/* --------------------------------- Icons -------------------------------- */

type IconProps = { name: string; className?: string };

function Icon({ name, className }: IconProps) {
  const path: Record<string, React.ReactNode> = {
    ReceiptText: (
      <path d="M6 3h12a2 2 0 0 1 2 2v16l-3-2-3 2-3-2-3 2-3-2V5a2 2 0 0 1 2-2Zm3 5v2h6V8H9Zm0 4v2h6v-2H9Z" />
    ),
    ShieldCheck: (
      <path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3Zm-1.5 13.5L7 12l1.41-1.41 2.09 2.08 4.09-4.08L16 10l-5.5 5.5Z" />
    ),
    Star: (
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2Z" />
    ),
    BadgeCheck: (
      <path d="M12 2 9.5 4.5 6 4l-.5 3.5L2 9l2 3-2 3 3.5 1.5L6 20l3.5-.5L12 22l2.5-2.5L18 20l.5-3.5L22 15l-2-3 2-3-3.5-1.5L18 4l-3.5.5L12 2Zm-1.5 13.5L7 12l1.41-1.41 2.09 2.08 4.09-4.08L16 10l-5.5 5.5Z" />
    ),
    Phone: (
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
    ),
    Mail: (
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    ),
    MapPin: (
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    ),
    Clock: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v5.59l3.95 2.37-1 1.73L11 13.7V7h2Z" />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      {path[name] ?? null}
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="m5 13 4 4L19 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14l-5-4.87 6.91-1.01L12 2z"
      />
    </svg>
  );
}