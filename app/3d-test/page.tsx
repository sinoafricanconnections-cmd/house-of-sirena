"use client";

import { useEffect, useState } from "react";

export default function Welcome() {
  const [entered, setEntered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
        background: "#A8CDD0",
        color: "#F8F7F4",
      }}
    >
      {/* =================================================
          MOVING LAGOON ATMOSPHERE
      ================================================= */}

      <div
        style={{
          position: "absolute",
          inset: "-15%",
          background: `
            radial-gradient(
              ellipse at 50% 20%,
              rgba(248,247,244,.48),
              transparent 32%
            ),
            radial-gradient(
              ellipse at 25% 70%,
              rgba(191,216,210,.42),
              transparent 35%
            ),
            linear-gradient(
              180deg,
              #A8CDD0 0%,
              #BFD8D2 42%,
              #6F9EA3 75%,
              #4F7278 100%
            )
          `,
          animation:
            "lagoonMovement 16s ease-in-out infinite alternate",
        }}
      />

      {/* =================================================
          SOFT LIGHT
      ================================================= */}

      <div
        style={{
          position: "absolute",
          inset: "-20%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 50% 38%, rgba(248,247,244,.24), transparent 28%)",
          animation:
            "lightMovement 11s ease-in-out infinite alternate",
          mixBlendMode: "screen",
        }}
      />

      {/* =================================================
          WATER-LIKE LIGHT PATTERN
      ================================================= */}

      <div
        style={{
          position: "absolute",
          inset: "-20%",
          pointerEvents: "none",
          opacity: 0.13,
          background:
            "repeating-radial-gradient(ellipse at 50% 10%, rgba(248,247,244,.5) 0px, transparent 3px, transparent 32px)",
          animation:
            "waterMovement 18s linear infinite",
        }}
      />

      {/* =================================================
          PEARLESCENT PARTICLES
      ================================================= */}

      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${(i * 37) % 100}%`,
            top: `${(i * 61) % 100}%`,
            width: i % 5 === 0 ? 4 : 2,
            height: i % 5 === 0 ? 4 : 2,
            borderRadius: "50%",
            background: "#F8F7F4",
            opacity: 0.15 + (i % 4) * 0.06,
            boxShadow:
              "0 0 10px rgba(248,247,244,.4)",
            animation: `particle ${
              6 + (i % 5)
            }s ease-in-out infinite alternate`,
            animationDelay: `${i * -0.4}s`,
          }}
        />
      ))}

      {/* =================================================
          ARRIVAL SCREEN
      ================================================= */}

      {!entered && (
        <section
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 30,
            opacity: loaded ? 1 : 0,
            transition:
              "opacity 2s ease",
          }}
        >
          <div>
            <div
              style={{
                fontFamily:
                  "var(--font-inter), sans-serif",
                fontSize: 9,
                letterSpacing: ".5em",
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              House of Sirena
            </div>

            <h1
              style={{
                fontFamily:
                  "var(--font-cormorant), serif",
                fontSize:
                  "clamp(58px, 13vw, 120px)",
                fontWeight: 300,
                lineHeight: 0.86,
                letterSpacing: "-.045em",
                margin:
                  "22px 0 28px",
              }}
            >
              The door
              <br />
              is open.
            </h1>

            <button
              onClick={() => setEntered(true)}
              style={{
                appearance: "none",
                border: "1px solid rgba(248,247,244,.55)",
                background:
                  "rgba(248,247,244,.06)",
                color: "#F8F7F4",
                padding:
                  "15px 32px",
                fontFamily:
                  "var(--font-inter), sans-serif",
                fontSize: 8,
                letterSpacing: ".35em",
                textTransform:
                  "uppercase",
                cursor: "pointer",
                backdropFilter:
                  "blur(8px)",
                transition:
                  "all .6s ease",
              }}
            >
              Enter
            </button>
          </div>
        </section>
      )}

      {/* =================================================
          HOUSE DESTINATIONS
      ================================================= */}

      {entered && (
        <section
          style={{
            position: "relative",
            zIndex: 10,
            minHeight: "100svh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding:
              "90px 24px",
            animation:
              "houseArrival 1.4s ease forwards",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: 50,
            }}
          >
            <div
              style={{
                fontFamily:
                  "var(--font-inter), sans-serif",
                fontSize: 8,
                letterSpacing: ".45em",
                textTransform:
                  "uppercase",
                opacity: 0.6,
              }}
            >
              Welcome to
            </div>

            <h2
              style={{
                fontFamily:
                  "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize:
                  "clamp(54px, 11vw, 100px)",
                lineHeight: 0.9,
                margin:
                  "14px 0 0",
              }}
            >
              The House
            </h2>
          </div>

          <div
            style={{
              width: "min(520px, 100%)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {[
              [
                "The Ritual",
                "Discover your ritual.",
              ],
              [
                "Pearl Collection",
                "Enter the first chapter.",
              ],
              [
                "Meet the Founder",
                "The woman behind the House.",
              ],
              [
                "Become a House Member",
                "Step further inside.",
              ],
              [
                "Journal",
                "Stories from the House.",
              ],
            ].map(([title, subtitle]) => (
              <button
                key={title}
                style={{
                  width: "100%",
                  padding:
                    "22px 24px",
                  display: "flex",
                  alignItems:
                    "center",
                  justifyContent:
                    "space-between",
                  textAlign: "left",
                  border:
                    "1px solid rgba(248,247,244,.25)",
                  background:
                    "rgba(248,247,244,.055)",
                  color: "#F8F7F4",
                  backdropFilter:
                    "blur(12px)",
                  cursor: "pointer",
                  transition:
                    "all .5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgba(248,247,244,.14)";

                  e.currentTarget.style.borderColor =
                    "rgba(248,247,244,.55)";

                  e.currentTarget.style.transform =
                    "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(248,247,244,.055)";

                  e.currentTarget.style.borderColor =
                    "rgba(248,247,244,.25)";

                  e.currentTarget.style.transform =
                    "translateX(0)";
                }}
              >
                <span>
                  <span
                    style={{
                      display:
                        "block",
                      fontFamily:
                        "var(--font-cormorant), serif",
                      fontSize: 25,
                    }}
                  >
                    {title}
                  </span>

                  <span
                    style={{
                      display:
                        "block",
                      marginTop: 3,
                      fontFamily:
                        "var(--font-inter), sans-serif",
                      fontSize: 8,
                      letterSpacing:
                        ".08em",
                      opacity: 0.55,
                    }}
                  >
                    {subtitle}
                  </span>
                </span>

                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 300,
                    opacity: 0.55,
                  }}
                >
                  →
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes lagoonMovement {
          0% {
            transform: scale(1)
              translate3d(-1%, -1%, 0);
          }

          100% {
            transform: scale(1.08)
              translate3d(2%, 2%, 0);
          }
        }

        @keyframes lightMovement {
          0% {
            transform: translate3d(
              -4%,
              -2%,
              0
            );
          }

          100% {
            transform: translate3d(
              4%,
              3%,
              0
            );
          }
        }

        @keyframes waterMovement {
          from {
            transform: rotate(0deg)
              scale(1);
          }

          to {
            transform: rotate(8deg)
              scale(1.12);
          }
        }

        @keyframes particle {
          from {
            transform: translate3d(
              0,
              0,
              0
            );
          }

          to {
            transform: translate3d(
              8px,
              -18px,
              0
            );
          }
        }

        @keyframes houseArrival {
          from {
            opacity: 0;
            transform: translateY(
              25px
            );
          }

          to {
            opacity: 1;
            transform: translateY(
              0
            );
          }
        }
      `}</style>
    </main>
  );
}