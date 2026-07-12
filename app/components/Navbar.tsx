import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[var(--surface-primary)]">

      {/* Top Gold Line */}
      <div className="w-full h-px bg-[var(--champagne)]" />

      <nav
        className="
          max-w-[1500px]
          mx-auto
          px-16
          py-5
          grid
          grid-cols-3
          items-center
        "
      >

        {/* LEFT */}

        <div className="flex items-center gap-12">

          <Link
            href="/the-house"
            className="
              uppercase
              tracking-[0.35em]
              text-[11px]
              text-[var(--text-secondary)]
              hover:text-[var(--text-primary)]
              transition-colors
              duration-300
            "
          >
            The House
          </Link>

          <Link
            href="/collections"
            className="
              uppercase
              tracking-[0.35em]
              text-[11px]
              text-[var(--text-secondary)]
              hover:text-[var(--text-primary)]
              transition-colors
              duration-300
            "
          >
            Collections
          </Link>

        </div>

        {/* CENTRE */}

        <div className="flex justify-center">

          <Link href="/">

            <h1
              className="
                font-heading
                text-4xl
                md:text-5xl
                font-light
                tracking-[0.02em]
                leading-none
                text-[var(--text-primary)]
                whitespace-nowrap
              "
            >
              House of Sirena
            </h1>

          </Link>

        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-end gap-12">

          <Link
            href="/journal"
            className="
              uppercase
              tracking-[0.35em]
              text-[11px]
              text-[var(--text-secondary)]
              hover:text-[var(--text-primary)]
              transition-colors
              duration-300
            "
          >
            Journal
          </Link>

          <Link
            href="/ritual"
            className="
              uppercase
              tracking-[0.35em]
              text-[11px]
              text-[var(--text-secondary)]
              hover:text-[var(--text-primary)]
              transition-colors
              duration-300
            "
          >
            Ritual
          </Link>

        </div>

      </nav>

      {/* Bottom Gold Line */}
      <div className="w-full h-px bg-[var(--champagne)]" />

    </header>
  );
}