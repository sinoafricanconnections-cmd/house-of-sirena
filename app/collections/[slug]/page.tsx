import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

const products = {
  "pearl-muse": {
    name: "Pearl Muse",
    subtitle:
      "A luminous expression of effortless beauty inspired by the quiet reflections of the sea.",
    price: "Available at Launch",
  },

  "ocean-grace": {
    name: "Ocean Grace",
    subtitle:
      "Gracefully designed to bring softness, balance and timeless elegance to every look.",
    price: "Available at Launch",
  },

  "golden-siren": {
    name: "Golden Siren",
    subtitle:
      "A refined statement created for moments that deserve quiet confidence.",
    price: "Available at Launch",
  },
};

type ProductSlug = keyof typeof products;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products[slug as ProductSlug];

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--surface-primary)] text-[var(--text-primary)]">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg,#F8F7F4 0%,#F3EEE7 55%,#EAF2F3 100%)",
        }}
      >

        <div className="max-w-7xl mx-auto px-8 py-24">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* Image */}

            <div
              className="
                h-[760px]
                rounded-[44px]
                overflow-hidden
                border
                border-[var(--border-light)]
                flex
                items-center
                justify-center
              "
              style={{
                background:
                  "linear-gradient(180deg,#F8F7F4 0%,#F3EEE7 45%,#BFD8D2 100%)",
              }}
            >

              <p
                className="
                  uppercase
                  tracking-[0.45em]
                  text-xs
                  text-[var(--text-secondary)]
                "
              >
                Campaign Photography Coming Soon
              </p>

            </div>

            {/* Copy */}

            <div>

              <p
                className="
                  uppercase
                  tracking-[0.45em]
                  text-xs
                  text-[var(--text-secondary)]
                  mb-8
                "
              >
                Collection I
              </p>

              <h1
                className="
                  font-heading
                  text-7xl
                  md:text-8xl
                  leading-none
                "
              >
                {product.name}
              </h1>

              <p
                className="
                  mt-10
                  text-xl
                  leading-10
                  text-[var(--text-secondary)]
                "
              >
                {product.subtitle}
              </p>

              <p
                className="
                  mt-12
                  uppercase
                  tracking-[0.35em]
                  text-xs
                  text-[var(--text-secondary)]
                "
              >
                {product.price}
              </p>

              <Link
                href="/checkout"
                className="
                  inline-flex
                  mt-12
                  px-12
                  py-5
                  rounded-full
                  border
                  border-[var(--pearlescent-lagoon)]
                  uppercase
                  tracking-[0.35em]
                  text-xs
                  transition-all
                  duration-500
                  hover:bg-[var(--pearlescent-lagoon)]
                "
              >
                Reserve Yours
              </Link>

            </div>

          </div>

        </div>

      </section>
            {/* ======================================================
          THE STORY
      ====================================================== */}

      <section
        className="py-40"
        style={{
          background:
            "linear-gradient(180deg,#EAF2F3 0%,#F8F7F4 100%)",
        }}
      >

        <div className="max-w-4xl mx-auto px-8 text-center">

          <p
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              text-[var(--text-secondary)]
              mb-8
            "
          >
            The Story
          </p>

          <h2
            className="
              font-heading
              text-5xl
              md:text-7xl
              leading-[1.2]
              font-light
            "
          >
            Inspired by
            <br />
            quiet beauty.
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
            Every creation within The Pearl Collection is inspired by the
            luminous beauty of pearls, the movement of water and the elegance
            found in simplicity. Thoughtfully designed to become part of your
            daily ritual, each style balances refinement, comfort and timeless
            beauty.
          </p>

        </div>

      </section>
     {/* ======================================================
    REFINED DETAILS
====================================================== */}
{/* ======================================================
    REFINED DETAILS
====================================================== */}

<section className="py-32">

  <div className="max-w-7xl mx-auto px-8">

    <div className="mb-20">

      <p
        className="
          uppercase
          tracking-[0.45em]
          text-xs
          text-[var(--text-secondary)]
          mb-6
        "
      >
        Refined Details
      </p>

      <h2
        className="
          font-heading
          text-5xl
          md:text-6xl
          font-light
          leading-[1.15]
        "
      >
        Crafted with
        <br />
        intention.
      </h2>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">

      <div>
        <h3 className="font-heading text-3xl mb-4">
          Featherlight Feel
        </h3>

        <p className="leading-8 text-[var(--text-secondary)]">
          Designed for exceptional comfort from morning through evening.
        </p>
      </div>

      <div>
        <h3 className="font-heading text-3xl mb-4">
          Invisible Band
        </h3>

        <p className="leading-8 text-[var(--text-secondary)]">
          A seamless finish created to blend beautifully with your natural lash line.
        </p>
      </div>

      <div>
        <h3 className="font-heading text-3xl mb-4">
          Premium Quality
        </h3>

        <p className="leading-8 text-[var(--text-secondary)]">
          Carefully crafted with precision and attention to every detail.
        </p>
      </div>

      <div>
        <h3 className="font-heading text-3xl mb-4">
          Reusable
        </h3>

        <p className="leading-8 text-[var(--text-secondary)]">
          Designed to be enjoyed multiple times with proper care.
        </p>
      </div>

      <div>
        <h3 className="font-heading text-3xl mb-4">
          Five Lash Rows
        </h3>

        <p className="leading-8 text-[var(--text-secondary)]">
          Create soft everyday looks or build beautiful definition.
        </p>
      </div>

      <div>
        <h3 className="font-heading text-3xl mb-4">
          Luxury Presentation
        </h3>

        <p className="leading-8 text-[var(--text-secondary)]">
          Beautifully presented as part of the complete House of Sirena experience.
        </p>
      </div>

    </div>

  </div>

</section>
{/* ======================================================
    EDITORIAL IMAGE
====================================================== */}

<section className="max-w-7xl mx-auto px-8 py-32">

  <div
    className="
      relative
      h-[760px]
      overflow-hidden
      rounded-[44px]
      border
      border-[var(--border-light)]
    "
  >

    <Image
      src="/images/pearl-editorial.png"
      alt="House of Sirena Editorial Campaign"
      fill
      className="object-cover"
      priority
    />

  </div>

</section>
{/* ======================================================
    INCLUDED
====================================================== */}

<section
  className="py-32"
  style={{
    background:
      "linear-gradient(180deg,#F8F7F4 0%,#F3EEE7 100%)",
  }}
>

  <div className="max-w-7xl mx-auto px-8">

    <p
      className="
        uppercase
        tracking-[0.45em]
        text-xs
        text-[var(--text-secondary)]
        mb-8
      "
    >
      Included
    </p>

    <div className="grid md:grid-cols-2 gap-x-20 gap-y-14">

      <div>
        <h3 className="font-heading text-3xl mb-4">
          Luxury Lash Set
        </h3>

        <p className="leading-8 text-[var(--text-secondary)]">
          Your selected Pearl Collection lash style.
        </p>
      </div>

      <div>
        <h3 className="font-heading text-3xl mb-4">
          Precision Tweezers
        </h3>

        <p className="leading-8 text-[var(--text-secondary)]">
          Designed for effortless and precise application.
        </p>
      </div>

      <div>
        <h3 className="font-heading text-3xl mb-4">
          Signature Mirror
        </h3>

        <p className="leading-8 text-[var(--text-secondary)]">
          Created for your everyday beauty ritual.
        </p>
      </div>

      <div>
        <h3 className="font-heading text-3xl mb-4">
          Presentation Box
        </h3>

        <p className="leading-8 text-[var(--text-secondary)]">
          Beautifully designed to protect and store your lashes.
        </p>
      </div>

    </div>

  </div>

</section>

{/* ======================================================
    CARE
====================================================== */}

<section
  className="py-32"
  style={{
    background:
      "linear-gradient(180deg, #F3EEE7 0%, #EEF2EF 50%, #E7F0F0 100%)",
  }}
>

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-3xl">

      <p
        className="
          uppercase
          tracking-[0.45em]
          text-xs
          text-[var(--text-secondary)]
          mb-8
        "
      >
        Care
      </p>

      <h2
        className="
          font-heading
          text-5xl
          md:text-6xl
          leading-[1.15]
          font-light
          mb-10
        "
      >
        Designed to be
        <br />
        enjoyed again.
      </h2>

      <p
        className="
          text-lg
          leading-9
          text-[var(--text-secondary)]
        "
      >
        With thoughtful care, your lashes may be reused multiple times.
        After each wear, gently remove any adhesive residue and return
        them to the presentation box to help preserve their original
        shape.
      </p>

    </div>

  </div>

</section>
{/* ======================================================
    SHIPPING & RETURNS
====================================================== */}

<section
  className="py-32"
  style={{
    background:
      "linear-gradient(180deg, #E7F0F0 0%, #EDF3F1 50%, #F3EEE7 100%)",
  }}
>

  <div className="max-w-7xl mx-auto px-8">

    <div className="max-w-3xl">

      <p
        className="
          uppercase
          tracking-[0.45em]
          text-xs
          text-[var(--text-secondary)]
          mb-8
        "
      >
        Shipping & Returns
      </p>

      <h2
        className="
          font-heading
          text-5xl
          md:text-6xl
          leading-[1.15]
          font-light
          mb-10
        "
      >
        Delivered with
        <br />
        care.
      </h2>

      <p
        className="
          text-lg
          leading-9
          text-[var(--text-secondary)]
        "
      >
        Shipping costs are calculated at checkout based on your delivery
        destination. Estimated delivery times and our full returns policy
        will be available before launch.
      </p>

    </div>

  </div>

</section>
{/* ======================================================
    RESERVE YOURS
====================================================== */}

<section
  className="py-40"
  style={{
    background:
      "linear-gradient(180deg, #F3EEE7 0%, #F8F7F4 48%, #EAF2F3 100%)",
  }}
>

  <div className="max-w-4xl mx-auto px-8 text-center">

    <p
      className="
        uppercase
        tracking-[0.45em]
        text-xs
        text-[var(--text-secondary)]
        mb-8
      "
    >
      The Pearl Collection
    </p>

    <h2
      className="
        font-heading
        text-6xl
        md:text-7xl
        leading-[1.1]
        font-light
        mb-10
      "
    >
      Reserve Yours
    </h2>

    <p
      className="
        max-w-2xl
        mx-auto
        text-lg
        leading-9
        text-[var(--text-secondary)]
        mb-14
      "
    >
      Begin your journey with House of Sirena. Reserve your Pearl Collection
      set and experience effortless beauty, thoughtfully designed for your
      everyday ritual.
    </p>

    <Link
      href="/checkout"
      className="
        inline-flex
        items-center
        justify-center
        px-14
        py-5
        rounded-full
        border
        border-[var(--pearlescent-lagoon)]
        uppercase
        tracking-[0.35em]
        text-xs
        transition-all
        duration-500
        hover:bg-[var(--pearlescent-lagoon)]
        hover:text-white
      "
    >
      Continue to Checkout
    </Link>

  </div>

</section>
{/* ======================================================
    DISCOVER THE RITUAL
====================================================== */}

<section
  className="py-40"
  style={{
    background:
      "linear-gradient(180deg, #EAF2F3 0%, #EEF0EC 38%, #F3EEE7 72%, #F8F7F4 100%)",
  }}
>

  <div className="max-w-5xl mx-auto px-8 text-center">

    <p
      className="
        uppercase
        tracking-[0.45em]
        text-xs
        text-[var(--text-secondary)]
        mb-8
      "
    >
      Beyond the Collection
    </p>

    <h2
      className="
        font-heading
        text-5xl
        md:text-6xl
        font-light
        leading-[1.15]
        mb-10
      "
    >
      Discover
      <br />
      The Ritual
    </h2>

    <p
      className="
        max-w-2xl
        mx-auto
        text-lg
        leading-9
        text-[var(--text-secondary)]
        mb-14
      "
    >
      Explore the philosophy behind House of Sirena and discover the beauty
      rituals that inspire every creation within The Pearl Collection.
    </p>

    <Link
      href="/ritual"
      className="
        inline-flex
        items-center
        justify-center
        px-12
        py-5
        rounded-full
        border
        border-[var(--pearlescent-lagoon)]
        uppercase
        tracking-[0.35em]
        text-xs
        transition-all
        duration-500
        hover:bg-[var(--pearlescent-lagoon)]
        hover:text-white
      "
    >
      Explore the Ritual
    </Link>

  </div>

</section>

</main>

  );
}