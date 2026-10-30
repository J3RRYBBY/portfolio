import { motion } from "motion/react";
import { Braces, Database, GitBranch, Server, Wrench } from "lucide-react";

import TechIcon from "./TechIcon";
import Reveal from "./animations/Reveal";
import { portfolio } from "../data/portfolio";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and interactive interfaces.",
    icon: Braces,
    skills: portfolio.skills.frontend,
  },
  {
    title: "Backend",
    description: "Developing APIs and server-side applications.",
    icon: Server,
    skills: portfolio.skills.backend,
  },
  {
    title: "Database",
    description: "Working with application data and storage.",
    icon: Database,
    skills: portfolio.skills.database,
  },
  {
    title: "Tools",
    description: "Development tools and version control.",
    icon: Wrench,
    skills: portfolio.skills.tools,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="
        border-t
        border-(--color-border)
        bg-(--color-surface)
        py-24
        sm:py-32
      "
    >
      <div className="portfolio-container">
        {/* Heading */}
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-label">Skills</p>

            <h2 className="section-title mt-4">
              Tools I use to
              <span className="text-(--color-accent)"> build.</span>
            </h2>

            <p className="section-description mt-6 max-w-xl">
              Technologies and tools I'm currently using while building web
              applications and improving my development skills.
            </p>
          </div>
        </Reveal>

        {/* Skill cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal
                key={group.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.08}
              >
                <motion.article
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="portfolio-card flex h-full flex-col p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-(--color-text)">
                        {group.title}
                      </h3>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-(--color-text-secondary)">
                        {group.description}
                      </p>
                    </div>

                    <motion.div
                      whileHover={{
                        rotate: 5,
                        scale: 1.05,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
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
                      <Icon size={18} />
                    </motion.div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{
                          y: -2,
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
                          bg-(--color-background)
                          px-3
                          py-2
                          text-xs
                          font-medium
                          text-(--color-text-secondary)
                          transition-colors
                          hover:border-(--color-accent)
                          hover:text-(--color-accent)
                        "
                      >
                        <TechIcon name={skill} size={15} />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        {/* Workflow */}
        <Reveal delay={0.1}>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 border-y border-(--color-border)"
          >
            <div className="grid sm:grid-cols-3">
              {/* Build */}
              <motion.div
                whileHover={{
                  backgroundColor: "var(--color-accent-light)",
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 px-5 py-6 sm:px-6"
              >
                <span className="text-sm font-semibold text-(--color-accent)">
                  01
                </span>

                <div>
                  <p className="text-sm font-semibold text-(--color-text)">
                    Build
                  </p>

                  <p className="mt-1 text-xs text-(--color-text-muted)">
                    Create the interface
                  </p>
                </div>
              </motion.div>

              {/* Connect */}
              <motion.div
                whileHover={{
                  backgroundColor: "var(--color-accent-light)",
                }}
                transition={{ duration: 0.2 }}
                className="
                  flex
                  items-center
                  gap-4
                  border-t
                  border-(--color-border)
                  px-5
                  py-6
                  sm:border-l
                  sm:border-t-0
                  sm:px-6
                "
              >
                <span className="text-sm font-semibold text-(--color-accent)">
                  02
                </span>

                <div>
                  <p className="text-sm font-semibold text-(--color-text)">
                    Connect
                  </p>

                  <p className="mt-1 text-xs text-(--color-text-muted)">
                    Build the backend
                  </p>
                </div>
              </motion.div>

              {/* Improve */}
              <motion.div
                whileHover={{
                  backgroundColor: "var(--color-accent-light)",
                }}
                transition={{ duration: 0.2 }}
                className="
                  flex
                  items-center
                  gap-4
                  border-t
                  border-(--color-border)
                  px-5
                  py-6
                  sm:border-l
                  sm:border-t-0
                  sm:px-6
                "
              >
                <span className="text-sm font-semibold text-(--color-accent)">
                  03
                </span>

                <div>
                  <p className="text-sm font-semibold text-(--color-text)">
                    Improve
                  </p>

                  <p className="mt-1 text-xs text-(--color-text-muted)">
                    Test and iterate
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Reveal>

        {/* Git workflow */}
        <Reveal delay={0.15}>
          <motion.div
            whileHover={{
              x: 4,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="
              mt-8
              flex
              items-center
              gap-3
              text-sm
              text-(--color-text-muted)
            "
          >
            <GitBranch size={16} className="text-(--color-accent)" />

            <span>
              Learning through{" "}
              <span className="font-medium text-(--color-text-secondary)">
                real projects and continuous iteration
              </span>
            </span>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
