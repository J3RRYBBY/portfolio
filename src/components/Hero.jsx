import { motion } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

import { portfolio } from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        pt-16
      "
    >
      {/* Background accent */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 0.05,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          -right-30
          top-20
          h-80
          w-80
          rounded-full
          bg-(--color-accent)
          blur-3xl
        "
      />

      <div className="portfolio-container relative w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-3"
          >
            <motion.span
              initial={{
                width: 0,
              }}
              animate={{
                width: "2rem",
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px bg-(--color-accent)"
            />

            <p className="section-label">{portfolio.role}</p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-6
              max-w-4xl
              text-5xl
              font-semibold
              leading-[1.04]
              tracking-tighter
              text-(--color-text)
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Building web
            <br className="hidden sm:block" />
            experiences
            <span className="text-(--color-accent)">.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-(--color-text-secondary)
              sm:text-lg
              sm:leading-8
            "
          >
            {portfolio.intro}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="btn-accent"
            >
              View Projects
              <motion.span
                whileHover={{
                  x: 3,
                }}
              >
                <ArrowRight size={17} />
              </motion.span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="btn-outline"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex items-center gap-3"
          >
            {/* <motion.a
              href="https://github.com/J3RRYBBY"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-(--color-border)
                px-4
                py-2
                text-xs
                font-medium
                text-(--color-text-secondary)
                transition-colors
                hover:border-(--color-accent)
                hover:text-(--color-accent)
              "
            >
              GitHub
              <motion.span
                whileHover={{
                  x: 2,
                  y: -2,
                }}
              >
                <ArrowUpRight size={13} />
              </motion.span>
            </motion.a> */}

            {/* <motion.a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-(--color-border)
                px-4
                py-2
                text-xs
                font-medium
                text-(--color-text-secondary)
                transition-colors
                hover:border-(--color-accent)
                hover:text-(--color-accent)
              "
            >
              LinkedIn

              <motion.span
                whileHover={{
                  x: 2,
                  y: -2,
                }}
              >
                <ArrowUpRight size={13} />
              </motion.span>
            </motion.a> */}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 1,
          }}
          whileHover={{
            color: "var(--color-accent)",
          }}
          className="
            absolute
            -bottom-17.5
            left-0
            hidden
            items-center
            gap-2
            text-xs
            font-medium
            text-(--color-text-muted)
            sm:flex
          "
        >
          <motion.span
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={14} />
          </motion.span>
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
