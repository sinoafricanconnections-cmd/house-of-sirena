interface AtelierProgressProps {
  step: number;
}

export default function AtelierProgress({
  step,
}: AtelierProgressProps) {
  const items = [
    "Upload",
    "Discovery",
    "Education",
    "Profile",
    "Recommendation",
  ];

  return (
    <div className="flex justify-center mb-16">

      <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.2em]">

        {items.map((item, index) => (
          <div
            key={item}
            className={`font-body ${
              step >= index + 1
                ? "text-[var(--deep-lagoon)]"
                : "text-[var(--text-secondary)]"
            }`}
          >
            {String(index + 1).padStart(2, "0")} {item}
          </div>
        ))}

      </div>

    </div>
  );
}