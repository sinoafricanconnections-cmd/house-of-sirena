"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 800);
  }, []);

  return (
    <main className="bg-[var(--surface-primary)] text-[var(--text-primary)]">


      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative h-[calc(100vh-120px)] overflow-hidden">


        {/* Hero Image */}

        <Image
          src="/images/hero.png"
          alt="House of Sirena Pearlescent Lagoon"
          fill
          priority
          className="object-cover hero-image"
        />


        {/* Soft Overlay */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.15) 100%)",
          }}
        />


        {/* Pearl Light Movement */}

        <div className="absolute inset-0 pearl-shimmer" />


        {/* Hero Text */}

        <div
          className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          text-center
          px-8
          "
        >

          <h1
            className={`
            font-heading
            text-5xl
            md:text-7xl
            xl:text-8xl
            font-light
            tracking-[0.02em]
            text-white
            transition-all
            duration-[2500ms]
            ease-out
            ${
              loaded
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-12 blur-md"
            }
            `}
          >
            Where
            <br />
            light becomes beauty.
          </h1>

        </div>


        {/* Elegant Scroll Indicator */}

        <div
          className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          hero-scroll
          "
        >

          <span className="scroll-line" />

        </div>


      </section>
{/* ======================================================
    EDITORIAL PAUSE
====================================================== */}

<section className="py-48 px-8 bg-[var(--surface-secondary)]">

  <div className="max-w-4xl mx-auto text-center">

    <h2
      className="
        font-heading
        text-5xl
        md:text-7xl
        leading-[1.2]
        font-light
      "
    >
      Every creation
      <br />
      begins with intention
    </h2>

    <p
      className="
        mt-12
        max-w-2xl
        mx-auto
        text-lg
        leading-9
        text-[var(--text-secondary)]
      "
    >
      Thoughtfully designed.
      Carefully crafted.
      Made to become part of your ritual.
    </p>

  </div>

</section>
{/* ======================================================
    THE PEARL COLLECTION
====================================================== */}

<section className="py-48 px-8 bg-[var(--surface-secondary)]">

  <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Future Product Image */}

      <div
        className="
          relative
          h-[720px]
          rounded-[40px]
          overflow-hidden
          border
          border-[var(--border-light)]
        "
        style={{
          background:
            "linear-gradient(160deg,#F8F7F4 0%,#ECE6DB 45%,#DCCFC0 100%)",
        }}
      >

        {/* Soft Pearl Glow */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.75), transparent 60%)",
          }}
        />

        {/* Placeholder */}

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <div className="w-24 h-24 rounded-full border border-white/60 bg-white/30 backdrop-blur-sm" />

          <p className="mt-10 uppercase tracking-[0.45em] text-xs text-[var(--text-secondary)]">
            Future Photography
          </p>

        </div>

      </div>

      {/* Editorial Copy */}

      <div>

        <p className="uppercase tracking-[0.5em] text-xs text-[var(--text-secondary)] mb-8">
          Collection I
        </p>

        <h2
          className="
            font-heading
            text-5xl
            md:text-7xl
            font-light
            leading-[1.1]
          "
        >
          The Pearl
          <br />
          Collection
        </h2>

        <p
          className="
            mt-12
            max-w-lg
            leading-9
            text-[var(--text-secondary)]
          "
        >
          The beginning of House of Sirena. A collection inspired by
          luminous pearls, quiet elegance and timeless beauty. Every
          creation is thoughtfully designed to become part of your ritual.
        </p>

        <button
          className="
            mt-14
            border
            border-[var(--champagne)]
            px-10
            py-4
            uppercase
            tracking-[0.35em]
            text-xs
            transition-all
            duration-500
            hover:bg-[var(--champagne)]
            hover:text-white
          "
        >
          Discover the Collection
        </button>

      </div>

    </div>

  </div>

</section>
{/* ======================================================
    FEATURED CREATION
====================================================== */}

<section
  className="relative overflow-hidden py-48 text-white"
  style={{
    background:
      "linear-gradient(180deg,#BFD9DA 0%,#9CC8CC 40%,#6F9EA3 100%)",
  }}
>

  {/* Pearlescent Glow */}

  <div
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-40 blur-3xl"
    style={{
      background:
        "radial-gradient(circle, rgba(255,255,255,0.45) 0%, transparent 70%)",
    }}
  />

  <div className="relative max-w-6xl mx-auto px-8 text-center">

    {/* Label */}

    <p className="uppercase tracking-[0.45em] text-xs text-white/80 mb-10">
      Featured Creation
    </p>

    {/* Product Placeholder */}

    <div className="flex justify-center mb-14">

      <div
        className="
          w-[340px]
          h-[430px]
          rounded-[40px]
          bg-[var(--surface-primary)]
          border
          border-white/30
          shadow-[0_35px_80px_rgba(0,0,0,0.15)]
          flex
          items-center
          justify-center
        "
      >

        {/* Replace with Product Image */}

        <span className="uppercase tracking-[0.35em] text-xs text-[var(--text-secondary)]">
          Product Image
        </span>

      </div>

    </div>

    {/* Product Name */}

    <h2 className="font-heading text-6xl md:text-7xl font-light">
      Placeholder Name
    </h2>

    {/* Description */}

    <p className="mt-10 max-w-xl mx-auto leading-9 text-white/85 text-lg">
      A thoughtfully crafted creation designed to become part of your daily ritual.
    </p>

    {/* Button */}

    <button
      className="
        mt-14
        border
        border-white
        px-10
        py-4
        uppercase
        tracking-[0.35em]
        text-xs
        transition-all
        duration-500
        hover:bg-white
        hover:text-[#547B80]
      "
    >
      Discover the Creation
    </button>

  </div>

</section>
{/* ====================================================== */}
{/* THE JOURNAL */}
{/* ====================================================== */}


<section className="py-32 px-8 max-w-7xl mx-auto">


  {/* HEADER */}

  <div className="text-center mb-20">


    <p className="uppercase tracking-[0.5em] text-xs mb-6 text-[var(--text-secondary)]">
      The Journal
    </p>


    <h2 className="font-heading text-6xl md:text-7xl">
      Notes from the House
    </h2>


    <p className="max-w-2xl mx-auto mt-8 leading-8 text-[var(--text-secondary)]">
      A collection of thoughts, inspirations and moments
      from House of Sirena.
    </p>


  </div>





  {/* JOURNAL CARDS */}


  <div className="grid md:grid-cols-3 gap-10">



    {/* STORY ONE */}


    <article
      className="
      group
      h-[520px]
      rounded-[40px]
      overflow-hidden
      flex
      flex-col
      justify-end
      p-10
      text-white
      transition-all
      duration-700
      hover:scale-[1.02]
      "
      style={{
        background:
        "linear-gradient(160deg,#F8F3EA,#DCCFC0,#A88445)"
      }}
    >


      <p className="uppercase tracking-[0.45em] text-xs mb-6">
        The House
      </p>


      <h3 className="font-heading text-5xl">
        The Story of Sirena
      </h3>


      <p className="mt-5 leading-7 text-white/80">
        Discover the vision and philosophy
        behind the House.
      </p>


    </article>






    {/* STORY TWO */}



    <article
      className="
      group
      h-[520px]
      rounded-[40px]
      overflow-hidden
      flex
      flex-col
      justify-end
      p-10
      text-white
      transition-all
      duration-700
      hover:scale-[1.02]
      "
      style={{
        background:
        "linear-gradient(160deg,#A8CDD0,#52777D)"
      }}
    >


      <p className="uppercase tracking-[0.45em] text-xs mb-6">
        Craft
      </p>


      <h3 className="font-heading text-5xl">
        The Art of Beauty
      </h3>


      <p className="mt-5 leading-7 text-white/80">
        Exploring the details and ideas
        that shape every creation.
      </p>


    </article>






    {/* STORY THREE */}



    <article
      className="
      group
      h-[520px]
      rounded-[40px]
      overflow-hidden
      flex
      flex-col
      justify-end
      p-10
      transition-all
      duration-700
      hover:scale-[1.02]
      "
      style={{
        background:
        "linear-gradient(160deg,#FFFFFF,#E8DAB5)"
      }}
    >


      <p className="uppercase tracking-[0.45em] text-xs mb-6">
        Beauty
      </p>


      <h3 className="font-heading text-5xl">
        Everyday Elegance
      </h3>


      <p className="mt-5 leading-7">
        Moments of beauty, confidence
        and self-expression.
      </p>


    </article>



  </div>






  {/* BUTTON */}



  <div className="text-center mt-16">


    <button
      className="
      uppercase
      tracking-[0.4em]
      text-xs
      border-b
      border-[var(--champagne)]
      pb-3
      "
    >
      Explore The Journal
    </button>


  </div>



</section>
      

    </main>
    
  );
}
