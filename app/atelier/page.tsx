 export default function AtelierPage() {
  return (
    <main className="min-h-screen bg-[var(--surface-primary)] text-[var(--text-primary)]">

      {/* ====================================================== */}
      {/* HEADER */}
      {/* ====================================================== */}

      <section className="py-24 text-center border-b border-[var(--border-light)]">

        <p className="uppercase tracking-[0.45em] text-xs mb-4 text-[var(--text-secondary)]">
          House of Sirena
        </p>

        <h1 className="font-heading text-7xl">
          The Atelier
        </h1>

        <p className="mt-8 max-w-2xl mx-auto leading-8 text-[var(--text-secondary)]">
          Welcome to the creative studio of House of Sirena.
          Every colour, component, layout and interaction will
          be created here before becoming part of the House.
        </p>

      </section>

      {/* ====================================================== */}
      {/* TYPOGRAPHY */}
      {/* ====================================================== */}

      <section className="py-24 px-8 max-w-7xl mx-auto">

        <h2 className="font-heading text-5xl mb-16">
          Typography
        </h2>

        <div className="space-y-10">

          <h1 className="font-heading text-8xl">
            Display Heading
          </h1>

          <h2 className="font-heading text-6xl">
            Section Heading
          </h2>

          <h3 className="font-heading text-4xl">
            Editorial Heading
          </h3>

          <p className="text-xl leading-9 max-w-3xl">
            Beauty is not something to hide behind.
            It is something to express.
          </p>

          <p className="uppercase tracking-[0.4em] text-xs text-[var(--text-secondary)]">
            Editorial Label
          </p>

        </div>

      </section>

{/* ====================================================== */}
{/* MATERIAL LIBRARY */}
{/* ====================================================== */}

<section className="py-24 bg-[var(--surface-secondary)]">

  <div className="max-w-7xl mx-auto px-8">

    <h2 className="font-heading text-5xl mb-6">
      Material Library
    </h2>

    <p className="max-w-2xl leading-8 text-[var(--text-secondary)] mb-16">
      House of Sirena is inspired by light, texture and atmosphere.
      These are the materials that define the visual language of the House.
    </p>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Pearl White */}

      <div
        className="rounded-3xl border border-[var(--border-light)] h-60 p-6 flex flex-col justify-end"
        style={{
          backgroundColor: "var(--pearl)",
        }}
      >
        <h3 className="font-heading text-2xl">
          Pearl White
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          #F8F7F4
        </p>

        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          Soft. Timeless. Elegant.
        </p>

      </div>

      {/* Ivory Sand */}

      <div
        className="rounded-3xl border border-[var(--border-light)] h-60 p-6 flex flex-col justify-end"
        style={{
          backgroundColor: "var(--ivory-sand)",
        }}
      >
        <h3 className="font-heading text-2xl">
          Ivory Sand
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          #F3EEE5
        </p>

        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          Warm. Calm. Natural.
        </p>

      </div>

      {/* Pearlescent Lagoon */}

      <div
        className="rounded-3xl h-60 p-6 flex flex-col justify-end text-white"
        style={{
          background:
            "linear-gradient(145deg,#A8CDD0 0%,#6F9EA3 55%,#4F7278 100%)",
        }}
      >
        <h3 className="font-heading text-2xl">
          Pearlescent Lagoon
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/70">
          #A8CDD0
        </p>

        <p className="mt-3 text-sm text-white/80">
          Signature hue of the House.
        </p>

      </div>

      {/* Champagne Gold */}

      <div
        className="rounded-3xl h-60 p-6 flex flex-col justify-end text-white"
        style={{
          background:
            "linear-gradient(145deg,#E8DAB5,#C8A96A,#A88445)",
        }}
      >
        <h3 className="font-heading text-2xl">
          Champagne Gold
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/70">
          #C8A96A
        </p>

        <p className="mt-3 text-sm text-white/80">
          Refined. Luxurious. Quiet.
        </p>

      </div>

      {/* Sea Glass */}

      <div
        className="rounded-3xl border border-[var(--border-light)] h-60 p-6 flex flex-col justify-end"
        style={{
          backgroundColor: "#BFD8D2",
        }}
      >
        <h3 className="font-heading text-2xl">
          Sea Glass
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          #BFD8D2
        </p>

        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          Coastal. Fresh. Serene.
        </p>

      </div>

      {/* Oyster Grey */}

      <div
        className="rounded-3xl border border-[var(--border-light)] h-60 p-6 flex flex-col justify-end"
        style={{
          backgroundColor: "#D8D4CF",
        }}
      >
        <h3 className="font-heading text-2xl">
          Oyster Grey
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          #D8D4CF
        </p>

        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          Quiet. Refined. Editorial.
        </p>

      </div>

      {/* Shell Pink */}

      <div
        className="rounded-3xl border border-[var(--border-light)] h-60 p-6 flex flex-col justify-end"
        style={{
          backgroundColor: "#E4C6CB",
        }}
      >
        <h3 className="font-heading text-2xl">
          Shell Pink
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          #E4C6CB
        </p>

        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          Gentle. Delicate. Luminous.
        </p>

      </div>

      {/* Soft Sage */}

      <div
        className="rounded-3xl border border-[var(--border-light)] h-60 p-6 flex flex-col justify-end"
        style={{
          backgroundColor: "#B9C4B4",
        }}
      >
        <h3 className="font-heading text-2xl">
          Soft Sage
        </h3>

        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          #B9C4B4
        </p>

        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          Organic. Calm. Natural.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* ====================================================== */}
      {/* BUTTONS */}
      {/* ====================================================== */}

      <section className="py-24 px-8 max-w-7xl mx-auto">

        <h2 className="font-heading text-5xl mb-16">
          Buttons
        </h2>

        <div className="flex gap-8 flex-wrap">

          <button className="border border-[var(--champagne)] px-10 py-4 uppercase tracking-[0.35em] text-xs hover:bg-[var(--champagne)] hover:text-white">

            Discover the House

          </button>

          <button className="bg-[var(--pearlescent-lagoon)] text-white px-10 py-4 uppercase tracking-[0.35em] text-xs hover:bg-[var(--deep-lagoon)]">

            Explore Collection

          </button>

        </div>

      </section>
      {/* ====================================================== */}
      {/* SPACING PHILOSOPHY */}
      {/* ====================================================== */}

      <section className="py-24 px-8 max-w-7xl mx-auto">

        <h2 className="font-heading text-5xl mb-6">
          Spacing Philosophy
        </h2>

        <p className="max-w-2xl leading-8 text-[var(--text-secondary)] mb-16">
          Luxury is created through restraint.
          Space allows every detail to breathe.
          Every House of Sirena page follows intentional rhythm.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            ["Section XXL","200px"],
            ["Section XL","160px"],
            ["Section Large","120px"],
            ["Section Medium","96px"],
            ["Section Small","64px"],
            ["Component","32px"],
          ].map((space)=>(
            
            <div
              key={space[0]}
              className="border border-[var(--border-light)] rounded-3xl p-10"
            >

              <p className="font-heading text-3xl">
                {space[0]}
              </p>

              <p className="mt-4 text-[var(--text-secondary)]">
                {space[1]}
              </p>

            </div>

          ))}

        </div>

      </section>





      {/* ====================================================== */}
      {/* NAVIGATION CONCEPTS */}
      {/* ====================================================== */}


      <section className="py-24 bg-[var(--surface-secondary)]">

        <div className="max-w-7xl mx-auto px-8">


          <h2 className="font-heading text-5xl mb-6">
            Navigation Concepts
          </h2>


          <p className="max-w-2xl leading-8 text-[var(--text-secondary)] mb-16">
            The first interaction with the House.
            Three different expressions of luxury navigation.
          </p>



          <div className="space-y-12">


            {/* Concept A */}

            <div className="bg-[var(--surface-primary)] border border-[var(--border-light)] rounded-3xl p-12">


              <p className="uppercase tracking-[0.4em] text-xs text-[var(--text-secondary)] mb-10">
                Concept A — Editorial Maison
              </p>


              <div className="flex justify-between items-center border-y border-[var(--border-light)] py-8">

                <span>
                  The House
                </span>

                <span className="font-heading text-3xl">
                  House of Sirena
                </span>

                <span>
                  Collections
                </span>


              </div>


            </div>




            {/* Concept B */}


            <div className="bg-[var(--surface-primary)] border border-[var(--border-light)] rounded-3xl p-12">


              <p className="uppercase tracking-[0.4em] text-xs text-[var(--text-secondary)] mb-10">
                Concept B — European Maison
              </p>


              <div className="grid grid-cols-3 items-center border-y border-[var(--border-light)] py-8 text-center">


                <div>
                  The House
                  <br/>
                  Journal
                </div>


                <div className="font-heading text-3xl">
                  House of Sirena
                </div>


                <div>
                  Search
                  <br/>
                  Bag
                </div>


              </div>


            </div>





            {/* Concept C */}


            <div className="bg-[var(--surface-primary)] border border-[var(--border-light)] rounded-3xl p-12">


              <p className="uppercase tracking-[0.4em] text-xs text-[var(--text-secondary)] mb-10">
                Concept C — Invisible Modern
              </p>


              <div className="border-y border-[var(--border-light)] py-12 text-center">


                <p className="font-heading text-4xl">
                  House of Sirena
                </p>


                <p className="mt-6 text-sm tracking-[0.4em] uppercase">
                  Quiet Luxury
                </p>


              </div>


            </div>


          </div>


        </div>

      </section>





            {/* ====================================================== */}
      {/* HERO CONCEPTS */}
      {/* ====================================================== */}

      <section className="py-32 px-8 max-w-7xl mx-auto">


        <h2 className="font-heading text-5xl mb-6">
          Hero Concepts
        </h2>


        <p className="max-w-2xl leading-8 text-[var(--text-secondary)] mb-20">
          The opening moment of House of Sirena.
          Five different emotional directions for the digital experience.
        </p>



        <div className="space-y-16">



          {/* CONCEPT ONE */}

          <div className="relative h-[650px] rounded-[40px] overflow-hidden bg-[#EEE4D4]">

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="text-center">

                <p className="uppercase tracking-[0.5em] text-xs mb-8">
                  Concept 01
                </p>


                <h3 className="font-heading text-7xl">
                  Pure Minimalism
                </h3>


                <p className="mt-8 max-w-md mx-auto text-[var(--text-secondary)]">
                  Almost empty.
                  Light.
                  Silence.
                  The beauty of restraint.
                </p>

              </div>

            </div>

          </div>





          {/* CONCEPT TWO */}

          <div
            className="relative h-[650px] rounded-[40px] overflow-hidden text-white"
            style={{
              background:
              "linear-gradient(135deg,#A8CDD0,#547B80)"
            }}
          >

            <div className="absolute inset-0 flex items-center justify-center">


              <div className="text-center">


                <p className="uppercase tracking-[0.5em] text-xs mb-8">
                  Concept 02
                </p>


                <h3 className="font-heading text-7xl">
                  Cinematic Ocean
                </h3>


                <p className="mt-8 max-w-md mx-auto text-white/80">
                  Sunlight through shallow water.
                  Pearlescent reflections.
                  A world beneath the surface.
                </p>


              </div>


            </div>


          </div>







          {/* CONCEPT THREE */}


          <div className="relative h-[650px] rounded-[40px] overflow-hidden bg-[#F8F3EA] border border-[var(--border-light)]">


            <div className="absolute inset-0 flex items-center justify-center">


              <div className="text-center">


                <p className="uppercase tracking-[0.5em] text-xs mb-8">
                  Concept 03
                </p>


                <h3 className="font-heading text-7xl">
                  Luxury Editorial
                </h3>


                <p className="mt-8 max-w-md mx-auto text-[var(--text-secondary)]">
                  Inspired by fashion houses.
                  Elegant.
                  Timeless.
                  Magazine-like.
                </p>


              </div>


            </div>


          </div>






          {/* CONCEPT FOUR */}


          <div className="relative h-[650px] rounded-[40px] overflow-hidden bg-[#E8DAB5]">


            <div className="absolute inset-0 flex items-center justify-center">


              <div className="text-center">


                <p className="uppercase tracking-[0.5em] text-xs mb-8">
                  Concept 04
                </p>


                <h3 className="font-heading text-7xl">
                  The Reveal
                </h3>


                <p className="mt-8 max-w-md mx-auto text-[#54483C]">
                  A slow discovery.
                  Elements appear.
                  The House unfolds.
                </p>


              </div>


            </div>


          </div>







          {/* CONCEPT FIVE */}


          <div
            className="relative h-[650px] rounded-[40px] overflow-hidden text-white"
            style={{
              background:
              "linear-gradient(160deg,#4F7278,#1F3438)"
            }}
          >


            <div className="absolute inset-0 flex items-center justify-center">


              <div className="text-center">


                <p className="uppercase tracking-[0.5em] text-xs mb-8">
                  Concept 05
                </p>


                <h3 className="font-heading text-7xl">
                  Poetic Atmosphere
                </h3>


                <p className="mt-8 max-w-md mx-auto text-white/80">
                  Very little text.
                  Maximum feeling.
                  A quiet invitation.
                </p>


              </div>


            </div>


          </div>



        </div>


      </section>




      {/* ====================================================== */}
      {/* EDITORIAL LAYOUTS */}
      {/* ====================================================== */}



      <section className="py-24 bg-[var(--surface-secondary)]">


        <div className="max-w-7xl mx-auto px-8">


          <h2 className="font-heading text-5xl mb-16">
            Editorial Layouts
          </h2>



          <div className="grid md:grid-cols-2 gap-10">


            <div className="rounded-3xl border border-[var(--border-light)] p-12 min-h-[420px]">

              <p className="uppercase tracking-[0.4em] text-xs mb-12">
                Story Layout
              </p>

              <h3 className="font-heading text-5xl">
                Beauty is discovered.
              </h3>

            </div>



            <div className="rounded-3xl border border-[var(--border-light)] p-12 min-h-[420px]">

              <p className="uppercase tracking-[0.4em] text-xs mb-12">
                Collection Layout
              </p>

              <h3 className="font-heading text-5xl">
                The Pearl Collection.
              </h3>

            </div>



          </div>


        </div>


      </section>
                {/* ====================================================== */}
      {/* COLLECTION CARDS */}
      {/* ====================================================== */}

      <section className="py-32 px-8 max-w-7xl mx-auto">

        <h2 className="font-heading text-5xl mb-6">
          Collection Cards
        </h2>

        <p className="max-w-2xl leading-8 text-[var(--text-secondary)] mb-16">
          Collections are worlds.
          Each card should invite discovery.
        </p>


        <div className="grid md:grid-cols-3 gap-8">


          <div
            className="h-[520px] rounded-[40px] p-10 flex flex-col justify-end text-white"
            style={{
              background:
              "linear-gradient(160deg,#FFFFFF,#D9C7A4,#9C8060)"
            }}
          >

            <p className="uppercase tracking-[0.4em] text-xs mb-5">
              Collection One
            </p>

            <h3 className="font-heading text-4xl">
              The Pearl Collection
            </h3>

            <p className="mt-4 leading-7">
              Soft light.
              Ocean inspiration.
              Timeless beauty.
            </p>

          </div>



          <div
            className="h-[520px] rounded-[40px] p-10 flex flex-col justify-end text-white"
            style={{
              background:
              "linear-gradient(160deg,#A8CDD0,#52777D)"
            }}
          >

            <p className="uppercase tracking-[0.4em] text-xs mb-5">
              Collection Two
            </p>

            <h3 className="font-heading text-4xl">
              The Sirena
            </h3>

            <p className="mt-4 leading-7">
              Confidence.
              Femininity.
              Expression.
            </p>

          </div>



          <div
            className="h-[520px] rounded-[40px] p-10 flex flex-col justify-end"
            style={{
              background:
              "linear-gradient(160deg,#F5EFE4,#E6D3A5)"
            }}
          >

            <p className="uppercase tracking-[0.4em] text-xs mb-5">
              Future
            </p>

            <h3 className="font-heading text-4xl">
              New Chapters
            </h3>

            <p className="mt-4 leading-7">
              Collections waiting to be discovered.
            </p>

          </div>


        </div>

      </section>





      {/* ====================================================== */}
      {/* PRODUCT CARDS */}
      {/* ====================================================== */}

      <section className="py-32 bg-[var(--surface-secondary)]">

        <div className="max-w-7xl mx-auto px-8">


          <h2 className="font-heading text-5xl mb-16">
            Product Cards
          </h2>



          <div className="grid md:grid-cols-3 gap-10">


            {[
              "Pearl Muse",
              "Ocean Grace",
              "Golden Siren"
            ].map((product)=>(


              <div
                key={product}
                className="bg-white rounded-[40px] overflow-hidden"
              >


                <div
                  className="h-96 flex items-center justify-center"
                  style={{
                    background:
                    "radial-gradient(circle,#FFFFFF,#EADFCB)"
                  }}
                >

                  <div className="text-6xl">
                    ✧
                  </div>

                </div>



                <div className="p-10">


                  <p className="uppercase tracking-[0.4em] text-xs mb-4">
                    Lash Collection
                  </p>


                  <h3 className="font-heading text-4xl">
                    {product}
                  </h3>


                  <button className="mt-8 uppercase tracking-[0.35em] text-xs border-b border-black pb-2">
                    Discover
                  </button>


                </div>


              </div>


            ))}


          </div>


        </div>


      </section>






      {/* ====================================================== */}
      {/* JOURNAL CARDS */}
      {/* ====================================================== */}


      <section className="py-32 px-8 max-w-7xl mx-auto">


        <h2 className="font-heading text-5xl mb-16">
          Journal Cards
        </h2>


        <div className="grid md:grid-cols-2 gap-10">


          <div className="h-[420px] rounded-[40px] p-12 bg-[#EFE5D5] flex flex-col justify-end">

            <p className="uppercase tracking-[0.4em] text-xs">
              The House
            </p>


            <h3 className="font-heading text-5xl mt-8">
              The Story of Sirena
            </h3>


          </div>




          <div className="h-[420px] rounded-[40px] p-12 bg-[#A8CDD0] text-white flex flex-col justify-end">


            <p className="uppercase tracking-[0.4em] text-xs">
              Craft
            </p>


            <h3 className="font-heading text-5xl mt-8">
              The Art of Beauty
            </h3>


          </div>


        </div>


      </section>
            {/* ====================================================== */}
      {/* MOTION LANGUAGE */}
      {/* ====================================================== */}


      <section className="py-32 bg-[var(--surface-secondary)]">

        <div className="max-w-7xl mx-auto px-8">


          <h2 className="font-heading text-5xl mb-6">
            Motion Language
          </h2>


          <p className="max-w-2xl leading-8 text-[var(--text-secondary)] mb-16">
            House of Sirena movement is never loud.
            It should feel like light moving across water.
          </p>



          <div className="grid md:grid-cols-3 gap-8">


            {[
              {
                title:"Light",
                text:"Slow fades. Soft reveals. Gentle transitions."
              },
              {
                title:"Water",
                text:"Fluid movement inspired by waves and reflection."
              },
              {
                title:"Silk",
                text:"Smooth elegant motion with no sudden changes."
              }

            ].map(item=>(


              <div
                key={item.title}
                className="rounded-[40px] border border-[var(--border-light)] p-10 h-72 flex flex-col justify-end"
              >


                <h3 className="font-heading text-4xl">
                  {item.title}
                </h3>


                <p className="mt-5 leading-7 text-[var(--text-secondary)]">
                  {item.text}
                </p>


              </div>


            ))}


          </div>


        </div>


      </section>







      {/* ====================================================== */}
      {/* PHOTOGRAPHY RULES */}
      {/* ====================================================== */}



      <section className="py-32 px-8 max-w-7xl mx-auto">


        <h2 className="font-heading text-5xl mb-6">
          Photography Rules
        </h2>


        <p className="max-w-2xl leading-8 text-[var(--text-secondary)] mb-16">
          Every image represents the world of House of Sirena.
          Photography must feel timeless.
        </p>



        <div className="grid md:grid-cols-3 gap-8">


          {[
            "Breathing Room",
            "Warm Natural Light",
            "Soft Shadows",
            "Pearlescent Reflection",
            "Texture",
            "Editorial Composition"

          ].map(rule=>(


            <div
              key={rule}
              className="h-56 rounded-[40px] border border-[var(--border-light)] flex items-center justify-center text-center p-8"
            >

              <h3 className="font-heading text-3xl">
                {rule}
              </h3>

            </div>


          ))}


        </div>


      </section>








      {/* ====================================================== */}
      {/* THE HOUSE STANDARDS */}
      {/* ====================================================== */}



      <section className="py-40 bg-[#1F3438] text-white">


        <div className="max-w-5xl mx-auto px-8 text-center">


          <p className="uppercase tracking-[0.5em] text-xs text-white/70 mb-12">
            The House Standards
          </p>



          <h2 className="font-heading text-6xl md:text-7xl leading-tight">
            If this component stood beside
            the world's greatest maisons...
          </h2>



          <div className="my-20 w-24 h-px bg-white/40 mx-auto"/>



          <p className="text-4xl font-heading">
            Would it still belong?
          </p>



          <div className="grid md:grid-cols-2 gap-8 mt-20">


            <div className="border border-white/20 rounded-3xl p-12">

              <p className="text-sm uppercase tracking-[0.4em] mb-5">
                Yes
              </p>

              <h3 className="font-heading text-4xl">
                Keep it.
              </h3>

            </div>



            <div className="border border-white/20 rounded-3xl p-12">


              <p className="text-sm uppercase tracking-[0.4em] mb-5">
                No
              </p>


              <h3 className="font-heading text-4xl">
                Redesign it.
              </h3>


            </div>


          </div>



        </div>


      </section>



      {/* ====================================================== */}
      {/* MOBILE EXPERIENCE */}
      {/* ====================================================== */}



      <section className="py-32 bg-[var(--surface-secondary)]">


        <div className="max-w-5xl mx-auto px-8 text-center">


          <p className="uppercase tracking-[0.45em] text-xs mb-10">
            Mobile Experience
          </p>


          <h2 className="font-heading text-6xl">
            Small screen.
            Same world.
          </h2>


          <p className="mt-10 max-w-xl mx-auto leading-8 text-[var(--text-secondary)]">
            Every interaction should maintain the feeling of
            House of Sirena:
            calm, elegant and intentional.
          </p>


        </div>


      </section>
      {/* ====================================================== */}
{/* MOTION LANGUAGE */}
{/* ====================================================== */}


<section className="py-32 px-8 max-w-7xl mx-auto">


<h2 className="font-heading text-5xl mb-6">
Motion Language
</h2>


<p className="max-w-2xl leading-8 text-[var(--text-secondary)] mb-16">
Movement inspired by natural elements.
Every interaction should feel alive.
</p>



<div className="grid md:grid-cols-3 gap-8">


{/* LIGHT */}

<div
className="h-[450px] rounded-[40px] p-10 flex flex-col justify-end text-white"
style={{
background:
"radial-gradient(circle at top,#FFF8E8,#D8B879,#8E6C38)"
}}
>

<p className="uppercase tracking-[0.4em] text-xs mb-6">
Motion 01
</p>


<h3 className="font-heading text-5xl">
Light
</h3>


<p className="mt-4 text-white/80">
Soft reveals.
Golden transitions.
Morning sunlight.
</p>


</div>





{/* WATER */}


<div
className="h-[450px] rounded-[40px] p-10 flex flex-col justify-end text-white"
style={{
background:
"linear-gradient(160deg,#C8E8E8,#79AEB4,#416970)"
}}
>


<p className="uppercase tracking-[0.4em] text-xs mb-6">
Motion 02
</p>


<h3 className="font-heading text-5xl">
Water
</h3>


<p className="mt-4 text-white/80">
Fluid movement.
Reflection.
Slow waves.
</p>


</div>





{/* SILK */}


<div
className="h-[450px] rounded-[40px] p-10 flex flex-col justify-end"
style={{
background:
"linear-gradient(145deg,#FFFFFF,#E8D8C0,#BFA783)"
}}
>


<p className="uppercase tracking-[0.4em] text-xs mb-6">
Motion 03
</p>


<h3 className="font-heading text-5xl">
Silk
</h3>


<p className="mt-4">
Smooth.
Elegant.
Weightless.
</p>


</div>



</div>


</section>






{/* ====================================================== */}
{/* PHOTOGRAPHY RULES */}
{/* ====================================================== */}


<section className="py-32 bg-[var(--surface-secondary)]">


<div className="max-w-7xl mx-auto px-8">


<h2 className="font-heading text-5xl mb-16">
Photography Language
</h2>



<div className="grid md:grid-cols-3 gap-8">


<div
className="h-[500px] rounded-[40px] flex items-end p-10 text-white"
style={{
background:
"linear-gradient(to top,#BFA783,#F8F3EA)"
}}
>

<h3 className="font-heading text-4xl">
Warm Light
</h3>

</div>



<div
className="h-[500px] rounded-[40px] flex items-end p-10 text-white"
style={{
background:
"linear-gradient(to top,#52777D,#A8CDD0)"
}}
>

<h3 className="font-heading text-4xl">
Ocean Reflection
</h3>

</div>




<div
className="h-[500px] rounded-[40px] flex items-end p-10"
style={{
background:
"linear-gradient(to top,#E6D3A5,#FFFFFF)"
}}
>

<h3 className="font-heading text-4xl">
Pearl Texture
</h3>

</div>



</div>


</div>


</section>



{/* ====================================================== */}
{/* HOUSE STANDARDS */}
{/* ====================================================== */}



<section className="py-40 px-8">


<div className="max-w-5xl mx-auto text-center">


<p className="uppercase tracking-[0.5em] text-xs mb-12">
The House Standards
</p>


<h2 className="font-heading text-7xl leading-tight">
Would this belong beside
the world's greatest maisons?
</h2>



<div className="grid md:grid-cols-2 gap-10 mt-24">


<div
className="h-80 rounded-[40px] flex flex-col justify-center items-center"
style={{
background:
"linear-gradient(145deg,#FFFFFF,#E8DAB5)"
}}
>


<p className="uppercase tracking-[0.4em] text-xs">
Approved
</p>


<h3 className="font-heading text-5xl mt-5">
Keep it.
</h3>


</div>





<div
className="h-80 rounded-[40px] flex flex-col justify-center items-center text-white"
style={{
background:
"linear-gradient(145deg,#4F7278,#1F3438)"
}}
>


<p className="uppercase tracking-[0.4em] text-xs">
Rejected
</p>


<h3 className="font-heading text-5xl mt-5">
Redesign.
</h3>


</div>


</div>



</div>


</section>


 {/* ====================================================== */}
{/* MOBILE EXPERIENCE */}
{/* ====================================================== */}



<section className="py-32 bg-[var(--surface-secondary)]">


<div className="max-w-7xl mx-auto px-8">


<p className="uppercase tracking-[0.45em] text-xs mb-12 text-[var(--text-secondary)]">
Mobile Experience
</p>



<h2 className="font-heading text-6xl mb-20">
The House,
in every detail.
</h2>



<div className="grid md:grid-cols-3 gap-10">



{/* HOME */}


<div className="flex justify-center">


<div
className="w-[280px] h-[560px] rounded-[45px] overflow-hidden border border-[#C8A96A]"
style={{
background:
"linear-gradient(180deg,#F8F7F4,#BFCBC3)"
}}
>


<div className="h-24 flex items-center justify-center bg-[#F8F7F4]">

<p className="font-heading text-xl text-[#0F2C3F]">
House of Sirena
</p>

</div>


<div className="h-full flex items-center justify-center text-center p-8">


<h3 className="font-heading text-4xl text-[#0F2C3F]">
The Pearl Collection
</h3>


</div>


</div>


</div>








{/* PRODUCT */}



<div className="flex justify-center">


<div
className="w-[280px] h-[560px] rounded-[45px] overflow-hidden border border-[#C8A96A]"
style={{
background:
"linear-gradient(160deg,#FFFFFF,#E8DAB5,#A8CDD0)"
}}
>


<div className="h-72 flex items-center justify-center">


<div className="w-28 h-28 rounded-full bg-white/70"/>


</div>


<div className="p-8 bg-[#F8F7F4]">


<p className="uppercase tracking-[0.35em] text-xs text-[#36515A]">
Collection
</p>


<h3 className="font-heading text-3xl mt-5 text-[#0F2C3F]">
Pearl Muse
</h3>


<button className="mt-8 uppercase tracking-[0.3em] text-xs border-b border-[#C8A96A] pb-2">
Discover
</button>


</div>


</div>


</div>








{/* MENU */}



<div className="flex justify-center">


<div
className="w-[280px] h-[560px] rounded-[45px] overflow-hidden border border-[#C8A96A] text-white"
style={{
background:
"linear-gradient(160deg,#BFCBC3,#6F9EA3,#0F2C3F)"
}}
>


<div className="h-full flex flex-col justify-center items-center">


<h3 className="font-heading text-5xl">
Menu
</h3>


<div className="mt-12 space-y-6 uppercase tracking-[0.3em] text-xs">


<p>
The House
</p>

<p>
Collections
</p>

<p>
Journal
</p>

<p>
Experience
</p>


</div>


</div>


</div>


</div>



</div>


</div>


</section>
    </main>
    
  );
}