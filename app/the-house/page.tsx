import Link from "next/link";
export default function TheHousePage() {
  return (
    <main className="bg-[var(--surface-primary)] text-[var(--text-primary)]">

      {/* ======================================================
          THE HOUSE HERO
      ====================================================== */}

      <section className="relative h-screen overflow-hidden">


        {/* Hero Image */}

        <div
          className="
          absolute
          inset-0
          bg-cover
          bg-center
          "
          style={{
            backgroundImage:
              "url('/images/the-house-hero.png')",
          }}
        />


        {/* Soft Ocean Overlay */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(168,205,208,0.12), rgba(79,114,120,0.35))",
          }}
        />


        {/* Hero Content */}

        <div
          className="
          relative
          z-10
          h-full
          flex
          items-end
          justify-center
          text-center
          px-8
          pb-32
          "
        >

          <div className="hero-text">


            {/* Section Label */}

            <p
              className="
              uppercase
              tracking-[0.7em]
              text-xs
              mb-10
              text-[var(--pearl)]
              opacity-90
              "
            >
              The House
            </p>


            {/* Hero Statement */}

            <h1
  className="
  font-heading
  text-6xl
  md:text-8xl
  font-light
  leading-[1.05]
  tracking-wide
  text-[var(--pearl)]
  "
>
  Beauty,
  <br />
  shaped by intention.
</h1>


          </div>


        </div>


      </section>

{/* ======================================================
    THE STORY OF HOUSE OF SIRENA
====================================================== */}

<section
  className="
  py-48
  px-8
  bg-[var(--surface-secondary)]
  "
>

  <div
    className="
    max-w-5xl
    mx-auto
    text-center
    "
  >

    <p
      className="
      uppercase
      tracking-[0.6em]
      text-xs
      mb-10
      text-[var(--champagne)]
      "
    >
      The Story
    </p>


    <h2
      className="
      font-heading
      text-5xl
      md:text-7xl
      font-light
      leading-[1.15]
      text-[var(--text-primary)]
      "
    >
      A House built on the belief
      <br />
      that beauty is meant to be expressed.
    </h2>


    <div
      className="
      mt-14
      max-w-3xl
      mx-auto
      space-y-6
      text-lg
      leading-9
      text-[var(--text-secondary)]
      "
    >

      <p>
        House of Sirena was founded on the belief that beauty
        is not something to hide behind — it is something to express.
      </p>


      <p>
        Inspired by the mystery, elegance, and timeless beauty
        of the Sirena, the House celebrates the harmony between
        strength and femininity.
      </p>


      <p>
        A Sirena is confident without needing to be loud,
        elegant without seeking attention, and beautiful because
        she embraces her individuality.
      </p>


      <p>
        The Pearl Collection marks the beginning of this journey —
        the first chapter in a House created to celebrate beauty
        in its many forms.
      </p>

    </div>


  </div>

</section>
{/* ======================================================
    THE PEARL COLLECTION
====================================================== */}

<section
  className="
  py-48
  px-8
  "
  style={{
    background:
      "linear-gradient(180deg, var(--warm-stone), var(--oyster-grey))",
  }}
>

  <div
    className="
    max-w-7xl
    mx-auto
    grid
    lg:grid-cols-2
    gap-24
    items-center
    "
  >


    {/* Placeholder Image */}

    <div
      className="
      relative
      h-[650px]
      rounded-[40px]
      overflow-hidden
      border
      border-white/40
      "
      style={{
        background:
          "linear-gradient(160deg, #F8F7F4, #E7ECEB, #C9B8A8)",
      }}
    >

      {/* Pearl Light */}

      <div
        className="
        absolute
        inset-0
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.75), transparent 60%)",
        }}
      />


      {/* Placeholder Object */}

      <div
        className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        "
      >

        <div
          className="
          w-32
          h-32
          rounded-full
          bg-white/50
          border
          border-white/70
          backdrop-blur-sm
          "
        />

      </div>


    </div>



    {/* Collection Copy */}

    <div>


      <p
  className="
  uppercase
  tracking-[0.6em]
  text-xs
  mb-10
  text-[var(--text-primary)]
  opacity-70
  "
>
  The Pearl Collection
</p>


      <h2
        className="
        font-heading
        text-5xl
        md:text-7xl
        font-light
        leading-[1.1]
        text-[var(--text-primary)]
        "
      >
        The first chapter
        <br />
        of the House.
      </h2>



      <p
        className="
        mt-12
        max-w-lg
        text-lg
        leading-9
        text-[var(--text-primary)]
        opacity-80
        "
      >
        Inspired by the luminous beauty of pearls,
        natural textures, and timeless elegance,
        The Pearl Collection begins the journey
        of House of Sirena.
      </p>



     <Link
  href="/collections"
  className="
  inline-block
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
  Discover The Pearl Collection
</Link>

    </div>


  </div>


</section>
    </main>
  );
}