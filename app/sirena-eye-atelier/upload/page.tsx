"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const [fileName, setFileName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const router = useRouter();

  async function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);
    setPhotoUrl("");
    setIsProcessing(true);

    try {
      let fileToRead: Blob = file;

      const isHeic =
        file.type === "image/heic" ||
        file.type === "image/heif" ||
        file.name.toLowerCase().endsWith(".heic") ||
        file.name.toLowerCase().endsWith(".heif");

      if (isHeic) {
        const heic2any = (
          await import("heic2any")
        ).default;

        const converted = await heic2any({
          blob: file,
          toType: "image/jpeg",
          quality: 0.9,
        });

        fileToRead = Array.isArray(converted)
          ? converted[0]
          : converted;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result;

        if (typeof result === "string") {
          setPhotoUrl(result);

          sessionStorage.setItem(
            "sirenaPhoto",
            result
          );

          sessionStorage.setItem(
            "sirenaPhotoName",
            file.name
          );
        }

        setIsProcessing(false);
      };

      reader.onerror = () => {
        setIsProcessing(false);
        setPhotoUrl("");
      };

      reader.readAsDataURL(fileToRead);

    } catch (error) {
      console.error(
        "Unable to process portrait:",
        error
      );

      setPhotoUrl("");
      setIsProcessing(false);
    }
  }

  function handleContinue() {
    if (!photoUrl || isProcessing) return;

    router.push(
      "/sirena-eye-atelier/discovery"
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-4xl w-full text-center">

        <p className="font-body uppercase tracking-[0.35em] text-sm mb-4 text-[var(--text-secondary)]">
          Chapter I
        </p>

        <h1 className="font-heading text-6xl md:text-7xl font-light mb-6">
          Upload Your Portrait
        </h1>

        <p className="font-body text-lg leading-relaxed max-w-2xl mx-auto text-[var(--text-secondary)] mb-12">
          A clear portrait allows us to begin your private
          Sirena Eye consultation.
        </p>

        <div className="border border-[var(--border-light)] bg-white p-16 mb-10">

          <div className="flex flex-col items-center justify-center">

            <div className="font-heading text-5xl mb-5">
              ✦
            </div>

            <h2 className="font-heading text-3xl mb-3">
              Your Portrait
            </h2>

            <p className="font-body text-sm text-[var(--text-secondary)] mb-8">
              JPG • PNG • HEIC
            </p>

            <label className="cursor-pointer">

              <span className="inline-block border border-[var(--deep-lagoon)] px-8 py-3 font-body tracking-wide hover:bg-[var(--deep-lagoon)] hover:text-white transition-all duration-300">
                Choose Portrait
              </span>

              <input
                type="file"
                accept="image/jpeg,image/png,image/heic,image/heif"
                className="hidden"
                onChange={handleFileChange}
              />

            </label>

            <p className="mt-6 font-body text-sm text-[var(--text-secondary)]">
              {isProcessing
                ? "Preparing your portrait..."
                : fileName || "No portrait selected"}
            </p>

          </div>

        </div>

        <button
          onClick={handleContinue}
          disabled={!photoUrl || isProcessing}
          className="inline-flex items-center justify-center px-10 py-4 bg-[var(--deep-lagoon)] text-white font-body tracking-wide transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
        >
          {isProcessing
            ? "Preparing..."
            : "Continue →"}
        </button>

      </div>

    </main>
  );
}