import { motion } from "motion/react";
import { ArrowUpRight, Code2, GraduationCap, Braces } from "lucide-react";

import { portfolio } from "../data/portfolio";
import Reveal from "./animations/Reveal";

function About() {
  return (
    <section
      id="about"
      className="
        border-t
        border-(--color-border)
        py-24
        sm:py-32
      "
    >
      <div className="portfolio-container">
        {/* Section heading */}
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-label">About Me</p>

            <h2 className="section-title mt-4">
              A developer who enjoys
              <span className="text-(--color-accent)"> building.</span>
            </h2>
          </div>
        </Reveal>

        {/* Main content */}
        <div
          className="
            mt-12
            grid
            gap-10
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-16
          "
        >
          {/* Introduction */}
          <Reveal direction="left">
            <div className="max-w-2xl">
              <p
                className="
                  text-lg
                  leading-8
                  text-(--color-text-secondary)
                "
              >
                {portfolio.about}
              </p>

              <p
                className="
                  mt-5
                  leading-7
                  text-(--color-text-muted)
                "
              >
                I'm currently focused on building practical full-stack web
                applications while strengthening my skills in React, Laravel,
                JavaScript, PHP, APIs, and MySQL.
              </p>

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
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-(--color-border)
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-(--color-text)
                  transition-colors
                  hover:border-(--color-accent)
                  hover:bg-(--color-accent-light)
                  hover:text-(--color-accent)
                "
              >
                Let's work together
                <motion.span
                  whileHover={{
                    x: 2,
                    y: -2,
                  }}
                >
                  <ArrowUpRight size={15} />
                </motion.span>
              </motion.a>
            </div>
          </Reveal>

          {/* Developer profile card */}
          <Reveal direction="right" delay={0.1}>
            <motion.div
              whileHover={{
                y: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="portfolio-card overflow-hidden"
            >
              {/* Card heading */}
              <div
                className="
                  border-b
                  border-(--color-border)
                  p-6
                "
              >
                <p className="text-sm font-semibold text-(--color-text)">
                  Developer Profile
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-(--color-text-secondary)
                  "
                >
                  Focused on building practical, modern web applications and
                  continuously improving as a full-stack developer.
                </p>
              </div>

              <div className="divide-y divide-(--color-border)">
                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                  }}
                  className="flex items-center gap-4 p-5"
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-(--color-accent-light)
                      text-(--color-accent)
                    "
                  >
                    <GraduationCap size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-(--color-text-muted)">
                      Education
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-medium
                        text-(--color-text)
                      "
                    >
                      {portfolio.education[0].title}
                    </p>
                  </div>
                </motion.div>

                {/* Current Focus */}
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                  }}
                  className="flex items-center gap-4 p-5"
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-(--color-accent-light)
                      text-(--color-accent)
                    "
                  >
                    <Code2 size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-(--color-text-muted)">
                      Current Focus
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-medium
                        text-(--color-text)
                      "
                    >
                      Full-Stack Web Development
                    </p>
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                  }}
                  className="flex items-center gap-4 p-5"
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-(--color-accent-light)
                      text-(--color-accent)
                    "
                  >
                    <Braces size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-(--color-text-muted)">
                      Technologies
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-medium
                        text-(--color-text)
                      "
                    >
                      React, Laravel & JavaScript
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Technical focus */}
        {/* <div
          className="
            mt-14
            grid
            border-y
            border-(--color-border)
            sm:grid-cols-3
          "
        > */}

        {/* Frontend */}
        {/* <div className="px-5 py-7 sm:px-6">
            <p
              className="
                text-xl
                font-semibold
                tracking-tight
                text-(--color-text)
              "
            >
              React & JavaScript
            </p>

            <p className="mt-1 text-sm text-(--color-text-muted)">Frontend</p>
          </div> */}

        {/* Backend */}
        {/* <div
            className="
              border-t
              border-(--color-border)
              px-5
              py-7
              sm:border-l
              sm:border-t-0
              sm:px-6
            "
          >
            <p
              className="
                text-xl
                font-semibold
                tracking-tight
                text-(--color-text)
              "
            >
              Laravel & PHP
            </p>

            <p className="mt-1 text-sm text-(--color-text-muted)">Backend</p>
          </div> */}

        {/* Database */}
        {/* <div
            className="
              border-t
              border-(--color-border)
              px-5
              py-7
              sm:border-l
              sm:border-t-0
              sm:px-6
            "
          >
            <p
              className="
                text-xl
                font-semibold
                tracking-tight
                text-(--color-text)
              "
            >
              MySQL
            </p>

            <p className="mt-1 text-sm text-(--color-text-muted)">Database</p>
          </div> */}

        {/* </div> */}
      </div>
    </section>
  );
}

export default About;
