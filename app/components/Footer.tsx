import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-40 text-white">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg,#F8F7F4 0%,#DCCFC0 25%,#A8CDD0 55%,#4F7278 100%)",
        }}
      />

      {/* Sun */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(circle,#FFF8DC 0%,#E8DAB5 40%,transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8">

        {/* Intro */}
        <div className="text-center">

          <p className="uppercase tracking-[0.5em] text-xs text-white/80 mb-12">
            House of Sirena
          </p>

          <h2 className="font-heading text-7xl md:text-8xl">
            Beneath the waves,
            <br />
            beauty is reimagined.
          </h2>

          <p className="max-w-xl mx-auto mt-10 leading-8 text-white/80">
            Inspired by the sea. Created for modern beauty.
          </p>

        </div>

        {/* Navigation */}
        <div className="mt-28 grid grid-cols-2 lg:grid-cols-5 gap-16">

          {/* The House */}
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-white/70 mb-5">
              The House
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/the-house"
                className="hover:text-white transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Collection */}
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-white/70 mb-5">
              Collection
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/collections"
                className="hover:text-white transition-colors"
              >
                The Pearl Collection
              </Link>
            </div>
          </div>

          {/* Journal */}
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-white/70 mb-5">
              Journal
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/journal"
                className="hover:text-white transition-colors"
              >
                Journal
              </Link>
            </div>
          </div>

          {/* Ritual */}
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-white/70 mb-5">
              Ritual
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/ritual"
                className="hover:text-white transition-colors"
              >
                Ritual
              </Link>
            </div>
          </div>

          {/* From the House */}
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-white/70 mb-5">
              From the House
            </p>

            <div className="flex flex-col gap-3">

              <a
                href="https://instagram.com/house.of.sirena"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@house.of.sirena"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                TikTok
              </a>

              <a
                href="https://za.pinterest.com/sinoafricanconnections/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Pinterest
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-32 pt-8 border-t border-white/20 text-center">

          <p className="text-sm tracking-wide text-white/70">
            © {new Date().getFullYear()} House of Sirena. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}