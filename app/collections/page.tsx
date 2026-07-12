export default function PearlCollection() {
  return (
    <main className="bg-[var(--surface-primary)] text-[var(--text-primary)] min-h-screen">


      {/* ======================================================
          COLLECTION HERO
      ====================================================== */}

      <section className="py-48 px-8 text-center">


        <p className="
          uppercase
          tracking-[0.5em]
          text-xs
          text-[var(--text-secondary)]
          mb-10
        ">
          Collection I
        </p>


        <h1
          className="
            font-heading
            text-6xl
            md:text-8xl
            font-light
            leading-tight
          "
        >
          The Pearl
          <br />
          Collection
        </h1>


        <p
          className="
            max-w-2xl
            mx-auto
            mt-12
            text-lg
            leading-9
            text-[var(--text-secondary)]
          "
        >
          Inspired by ocean light, luminous pearls
          and timeless beauty.
        </p>


      </section>






      {/* ======================================================
          PRODUCT CARDS
      ====================================================== */}


      <section className="py-32 bg-[var(--surface-secondary)]">


        <div className="max-w-7xl mx-auto px-8">



          <div className="grid md:grid-cols-3 gap-10">


            {[
              "Pearl Muse",
              "Ocean Grace",
              "Golden Siren"
            ].map((product)=>(


              <article
                key={product}
                className="
                  group
                  bg-white
                  rounded-[40px]
                  overflow-hidden
                  transition-all
                  duration-700
                  hover:-translate-y-3
                "
              >



                {/* PRODUCT IMAGE PLACEHOLDER */}


                <div
                  className="
                    h-[520px]
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                  "
                  style={{
                    background:
                    "radial-gradient(circle,#FFFFFF 0%,#F1E7D7 55%,#DCCFC0 100%)"
                  }}
                >


                  <div
                    className="
                      w-40
                      h-40
                      rounded-full
                      bg-white/60
                      backdrop-blur-sm
                      border
                      border-white
                      flex
                      items-center
                      justify-center
                      text-5xl
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                  >
                    ✧
                  </div>


                </div>






                {/* PRODUCT DETAILS */}


                <div className="p-10">


                  <p
                    className="
                      uppercase
                      tracking-[0.4em]
                      text-xs
                      text-[var(--text-secondary)]
                      mb-5
                    "
                  >
                    Lash Collection
                  </p>



                  <h2
                    className="
                      font-heading
                      text-4xl
                      font-light
                    "
                  >
                    {product}
                  </h2>




                  <p
                    className="
                      mt-5
                      leading-7
                      text-[var(--text-secondary)]
                    "
                  >
                    A refined creation inspired by
                    ocean light and timeless elegance.
                  </p>




                  <button
                    className="
                      mt-8
                      uppercase
                      tracking-[0.35em]
                      text-xs
                      border-b
                      border-[var(--champagne)]
                      pb-2
                    "
                  >
                    Discover
                  </button>



                </div>



              </article>


            ))}


          </div>



        </div>


      </section>



    </main>
  );
}