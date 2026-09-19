const projects = [
  {
    title: "Project One",
    blurb:
      "Short description of what you built, the problem it solves, and who it serves.",
    tags: ["Next.js", "TypeScript", "Mapbox"],
    href: "#",
  },
  {
    title: "Project Two",
    blurb:
      "Short description of what you built, the problem it solves, and who it serves.",
    tags: ["Python", "GeoPandas", "PostGIS"],
    href: "#",
  },
  {
    title: "Project Three",
    blurb:
      "Short description of what you built, the problem it solves, and who it serves.",
    tags: ["React Native", "Supabase"],
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1800px] px-5 sm:px-8 lg:px-10">
      {/* ---- Hero ---- */}
      <section className="flex min-h-screen flex-col justify-center gap-14 py-24 md:flex-row md:items-center md:justify-between md:gap-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            Hi, I&apos;m{" "}
            <span className="text-accent [text-shadow:0_0_44px_rgba(255,203,71,0.28)]">
              Ackshat Tiwari
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-2xl leading-snug text-white/75 text-pretty sm:text-3xl">
            Building geo-environmental tech and apps to empower{" "}
            <span className="text-accent [text-shadow:0_0_44px_rgba(255,203,71,0.28)]">
              DMV communities
            </span>
            .
          </p>
        </div>

        {/* Swap this div for <Image src="/me.jpg" alt="Ackshat Tiwari" fill /> */}
        <div className="aspect-square w-full max-w-[300px] shrink-0 self-start overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-sm md:max-w-[420px] md:self-auto">
          <div className="flex h-full w-full items-center justify-center text-lg text-white/40">
            Photo
          </div>
        </div>
      </section>

      {/* ---- Projects ---- */}
      <section className="py-28">
        <h2 className="text-base font-medium uppercase tracking-[0.18em] text-accent">
          Projects
        </h2>
        <p className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
          Things I&apos;ve coded.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors hover:border-accent/50 hover:bg-white/[0.07]"
            >
              <h3 className="text-2xl font-medium transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-lg leading-relaxed text-white/65">
                {project.blurb}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-sm text-white/55"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </section>

      {/* ---- Contact ---- */}
      <section className="py-28 pb-44">
        <h2 className="text-base font-medium uppercase tracking-[0.18em] text-accent">
          Contact
        </h2>
        <p className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
          Get in touch.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:ackshat.tiwari@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full border border-white/12 bg-black/30 px-7 py-4 backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
              className="h-6 w-6 text-white/70 transition-colors group-hover:text-accent"
            >
              <path d="M3 5h18a1 1 0 0 1 1 1v.4l-9.5 5.6a1 1 0 0 1-1 0L2 6.4V6a1 1 0 0 1 1-1Z" />
              <path d="M2 8.7V18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8.7l-9.5 5.3a1 1 0 0 1-1 0L2 8.7Z" />
            </svg>
            <span className="text-lg">ackshat.tiwari@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/ackshat-tiwari-4a1a53392/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/12 bg-black/30 px-7 py-4 backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
              className="h-6 w-6 text-white/70 transition-colors group-hover:text-accent"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
            </svg>
            <span className="text-lg">LinkedIn</span>
          </a>
        </div>
      </section>
    </main>
  );
}
