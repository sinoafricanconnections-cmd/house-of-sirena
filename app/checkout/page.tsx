"use client";

import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="min-h-screen bg-[var(--surface-primary)] text-[var(--text-primary)]">

      <section className="px-8 pt-32 pb-40">
        <div className="max-w-6xl mx-auto">

          <Link
            href="/collections"
            className="
              inline-block
              mb-16
              uppercase
              tracking-[0.35em]
              text-xs
              text-[var(--text-secondary)]
              transition-colors
              hover:text-[var(--text-primary)]
            "
          >
            ← Return to The Pearl Collection
          </Link>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-20 items-start">

            {/* ==================================================
                LEFT COLUMN
            ================================================== */}

            <div>

              {/* INTRODUCTION */}

              <div className="mb-24">

                <p
                  className="
                    uppercase
                    tracking-[0.5em]
                    text-xs
                    text-[var(--text-secondary)]
                    mb-7
                  "
                >
                  House of Sirena
                </p>

                <h1
                  className="
                    font-heading
                    text-5xl
                    md:text-7xl
                    font-bold
                    leading-[1.05]
                  "
                >
                  Reserve Your
                  <br />
                  Creation
                </h1>

                <p
                  className="
                    max-w-xl
                    mt-10
                    text-lg
                    leading-8
                    text-[var(--text-secondary)]
                  "
                >
                  Complete your reservation and prepare to welcome
                  your House of Sirena creation.
                </p>

              </div>


              {/* YOUR DETAILS */}

              <section className="pb-20">

                <h2
                  className="
                    font-heading
                    text-3xl
                    md:text-4xl
                    font-bold
                    mb-10
                  "
                >
                  Your Details
                </h2>

                <div className="space-y-7">

                  <div className="grid md:grid-cols-2 gap-7">

                    <input
                      type="text"
                      placeholder="First name"
                      className="
                        w-full
                        bg-transparent
                        border-b
                        border-[var(--border-light)]
                        py-4
                        outline-none
                        placeholder:text-[var(--text-secondary)]
                        focus:border-[var(--pearlescent-lagoon)]
                      "
                    />

                    <input
                      type="text"
                      placeholder="Last name"
                      className="
                        w-full
                        bg-transparent
                        border-b
                        border-[var(--border-light)]
                        py-4
                        outline-none
                        placeholder:text-[var(--text-secondary)]
                        focus:border-[var(--pearlescent-lagoon)]
                      "
                    />

                  </div>

                  <input
                    type="email"
                    placeholder="Email address"
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-[var(--border-light)]
                      py-4
                      outline-none
                      placeholder:text-[var(--text-secondary)]
                      focus:border-[var(--pearlescent-lagoon)]
                    "
                  />

                  <input
                    type="tel"
                    placeholder="Mobile number"
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-[var(--border-light)]
                      py-4
                      outline-none
                      placeholder:text-[var(--text-secondary)]
                      focus:border-[var(--pearlescent-lagoon)]
                    "
                  />

                </div>

              </section>


              {/* DELIVERY */}

              <section className="border-t border-[var(--border-light)] pt-20 pb-20">

                <h2
                  className="
                    font-heading
                    text-3xl
                    md:text-4xl
                    font-bold
                    mb-10
                  "
                >
                  Delivery
                </h2>

                <div className="space-y-7">

                  <input
                    type="text"
                    placeholder="Search your delivery address"
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-[var(--border-light)]
                      py-4
                      outline-none
                      placeholder:text-[var(--text-secondary)]
                      focus:border-[var(--pearlescent-lagoon)]
                    "
                  />

                  <input
                    type="text"
                    placeholder="Apartment, suite or unit (optional)"
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-[var(--border-light)]
                      py-4
                      outline-none
                      placeholder:text-[var(--text-secondary)]
                      focus:border-[var(--pearlescent-lagoon)]
                    "
                  />

                  <div className="grid md:grid-cols-2 gap-7">

                    <input
                      type="text"
                      placeholder="Suburb"
                      className="
                        w-full
                        bg-transparent
                        border-b
                        border-[var(--border-light)]
                        py-4
                        outline-none
                        placeholder:text-[var(--text-secondary)]
                        focus:border-[var(--pearlescent-lagoon)]
                      "
                    />

                    <input
                      type="text"
                      placeholder="City"
                      className="
                        w-full
                        bg-transparent
                        border-b
                        border-[var(--border-light)]
                        py-4
                        outline-none
                        placeholder:text-[var(--text-secondary)]
                        focus:border-[var(--pearlescent-lagoon)]
                      "
                    />

                  </div>

                  <div className="grid md:grid-cols-2 gap-7">

                    <input
                      type="text"
                      placeholder="Province"
                      className="
                        w-full
                        bg-transparent
                        border-b
                        border-[var(--border-light)]
                        py-4
                        outline-none
                        placeholder:text-[var(--text-secondary)]
                        focus:border-[var(--pearlescent-lagoon)]
                      "
                    />

                    <input
                      type="text"
                      placeholder="Postal code"
                      className="
                        w-full
                        bg-transparent
                        border-b
                        border-[var(--border-light)]
                        py-4
                        outline-none
                        placeholder:text-[var(--text-secondary)]
                        focus:border-[var(--pearlescent-lagoon)]
                      "
                    />

                  </div>

                  <input
                    type="text"
                    defaultValue="South Africa"
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-[var(--border-light)]
                      py-4
                      outline-none
                      placeholder:text-[var(--text-secondary)]
                      focus:border-[var(--pearlescent-lagoon)]
                    "
                  />

                </div>

              </section>


              {/* PAYMENT */}

              <section className="border-t border-[var(--border-light)] pt-20">

                <h2
                  className="
                    font-heading
                    text-3xl
                    md:text-4xl
                    font-bold
                    mb-8
                  "
                >
                  Payment
                </h2>

                <div
                  className="
                    rounded-[28px]
                    bg-[var(--surface-secondary)]
                    p-8
                    md:p-10
                  "
                >

                  <p className="font-heading text-2xl font-bold">
                    Secure payment
                  </p>

                  <p
                    className="
                      mt-4
                      max-w-lg
                      leading-7
                      text-[var(--text-secondary)]
                    "
                  >
                    Your payment will be securely processed by
                    our selected payment provider.
                  </p>

                </div>

              </section>

            </div>


            {/* ==================================================
                RIGHT COLUMN — YOUR SELECTION
            ================================================== */}

            <aside
              className="
                lg:sticky
                lg:top-10
                self-start
                bg-[var(--surface-secondary)]
                rounded-[32px]
                p-8
                md:p-10
              "
            >

              <p
                className="
                  uppercase
                  tracking-[0.4em]
                  text-xs
                  text-[var(--text-secondary)]
                  mb-8
                "
              >
                Your Selection
              </p>


              {/* PRODUCT IMAGE */}

              <div
                className="
                  w-full
                  aspect-[4/5]
                  rounded-[24px]
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
                style={{
                  background:
                    "radial-gradient(circle,#FFFFFF 0%,#F3EEE7 52%,#DCCFC0 100%)",
                }}
              >

                <div
                  className="
                    w-36
                    h-36
                    rounded-full
                    bg-white/70
                    border
                    border-white
                    flex
                    items-center
                    justify-center
                    text-4xl
                  "
                >
                  ✧
                </div>

              </div>


              {/* PRODUCT INFORMATION */}

              <div className="pt-8">

                <p
                  className="
                    uppercase
                    tracking-[0.35em]
                    text-xs
                    text-[var(--text-secondary)]
                    mb-4
                  "
                >
                  Pearl Collection
                </p>

                <h2
                  className="
                    font-heading
                    text-4xl
                    font-bold
                  "
                >
                  Pearl Muse
                </h2>

                <p
                  className="
                    mt-4
                    leading-7
                    text-[var(--text-secondary)]
                  "
                >
                  A luminous expression of effortless beauty
                  inspired by the quiet reflections of the sea.
                </p>


                {/* QUANTITY */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mt-8
                    pb-8
                    border-b
                    border-[var(--border-light)]
                  "
                >

                  <span className="text-sm text-[var(--text-secondary)]">
                    Quantity
                  </span>

                  <div className="flex items-center gap-5">

                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(Math.max(1, quantity - 1))
                      }
                      className="
                        w-9
                        h-9
                        rounded-full
                        border
                        border-[var(--border-light)]
                      "
                    >
                      −
                    </button>

                    <span>
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(quantity + 1)
                      }
                      className="
                        w-9
                        h-9
                        rounded-full
                        border
                        border-[var(--border-light)]
                      "
                    >
                      +
                    </button>

                  </div>

                </div>


                {/* SUMMARY */}

                <div className="py-8 space-y-5">

                  <div className="flex justify-between gap-6">

                    <span className="text-[var(--text-secondary)]">
                      Subtotal
                    </span>

                    <span>
                      Available at Launch
                    </span>

                  </div>

                  <div className="flex justify-between gap-6">

                    <span className="text-[var(--text-secondary)]">
                      Delivery
                    </span>

                    <span className="text-right">
                      Calculated before payment
                    </span>

                  </div>

                </div>


                {/* TOTAL */}

                <div className="border-t border-[var(--border-light)] pt-7">

                  <div className="flex justify-between items-baseline gap-6">

                    <span
                      className="
                        font-heading
                        text-2xl
                        font-bold
                      "
                    >
                      Total
                    </span>

                    <span
                      className="
                        text-sm
                        text-right
                        text-[var(--text-secondary)]
                      "
                    >
                      Final total
                    </span>

                  </div>

                </div>


                {/* CTA */}

                <button
                  type="button"
                  className="
                    w-full
                    mt-9
                    py-5
                    rounded-full
                    bg-[var(--deep-lagoon)]
                    text-white
                    uppercase
                    tracking-[0.3em]
                    text-xs
                    transition-all
                    duration-500
                    hover:opacity-90
                  "
                >
                  Complete Reservation
                </button>

                <p
                  className="
                    mt-6
                    text-center
                    text-xs
                    leading-6
                    text-[var(--text-secondary)]
                  "
                >
                  Your reservation is securely processed.
                </p>

              </div>

            </aside>

          </div>

        </div>
      </section>

    </main>
  );
}