export default function RecommendationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-3xl text-center">

        <p className="font-body uppercase tracking-[0.3em] text-sm mb-4">
          Chapter V
        </p>

        <h1 className="font-heading text-6xl mb-8">
          Your Signature Sirena
        </h1>

        <div className="space-y-8">

          <div>
            <h2 className="font-heading text-4xl mb-3">
              Pearl No. 01
            </h2>

            <p className="font-body">
              Your recommended style.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-3xl mb-3">
              Alternative Matches
            </h3>

            <p className="font-body">
              Pearl No. 02
            </p>

            <p className="font-body">
              Pearl No. 03
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}