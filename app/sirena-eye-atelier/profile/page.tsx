import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-3xl text-center">

        <p className="font-body uppercase tracking-[0.3em] text-sm mb-4">
          Chapter IV
        </p>

        <h1 className="font-heading text-6xl mb-8">
          Your Sirena Profile
        </h1>

        <h2 className="font-heading text-4xl mb-6">
          The Pearl Profile
        </h2>

        <p className="font-body text-lg leading-relaxed">
          Balanced elegance. Your features naturally suit
          refined lash silhouettes and soft elongation.
        </p>

        <div className="mt-12">
          <Link
            href="/sirena-eye-atelier/recommendation"
            className="border px-8 py-4"
          >
            View Recommendations
          </Link>
        </div>

      </div>

    </main>
  );
}