import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { portfolio } from "../data/portfolio";
import TechIcon from "./TechIcon";
import Reveal from "./animations/Reveal";

function Projects() {
  return (
    <section
      id="projects"
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
            <p className="section-label">Projects</p>

            <h2 className="section-title mt-4">
              Things I've been
              <span className="text-(--color-accent)"> building.</span>
            </h2>

            <p className="section-description mt-6 max-w-xl">
              A selection of projects I've built while learning and improving my
              frontend and backend development skills.
            </p>
          </div>
        </Reveal>

        {/* Projects */}
        <div className="mt-12 space-y-4">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.08}>
              <motion.article
                whileHover={{
                  y: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="
                  group
                  portfolio-card
                  overflow-hidden
                "
              >
                <div className="p-6 sm:p-7">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    {/* Project information */}
                    <div className="min-w-0">
                      {/* Project metadata */}
                      <div className="flex items-center gap-3">
                        <motion.span
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.08 + 0.1,
                          }}
                          className="
                            text-xs
                            font-semibold
                            tracking-[0.16em]
                            text-(--color-accent)
                          "
                        >
                          {project.number}
                        </motion.span>

                        <span className="h-px w-6 bg-(--color-border)" />

                        <span
                          className="
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.12em]
                            text-(--color-text-muted)
                          "
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Project title */}
                      <h3
                        className="
                          mt-4
                          text-xl
                          font-semibold
                          tracking-tight
                          text-(--color-text)
                          sm:text-2xl
                        "
                      >
                        <motion.span
                          className="inline-block"
                          whileHover={{
                            x: 3,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          {project.title}
                        </motion.span>
                      </h3>

                      {/* Description */}
                      <p
                        className="
                          mt-3
                          max-w-2xl
                          text-sm
                          leading-7
                          text-(--color-text-secondary)
                        "
                      >
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <motion.span
                            key={technology}
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
                              bg-(--color-surface)
                              px-3
                              py-1.5
                              text-xs
                              font-medium
                              text-(--color-text-secondary)
                              transition-colors
                              hover:border-(--color-accent)
                              hover:text-(--color-accent)
                            "
                          >
                            <TechIcon name={technology} size={14} />

                            {technology}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Project links */}
                    <div className="flex shrink-0 items-center gap-2">
                      {/* GitHub */}
                      {/* <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                        className="
                          inline-flex
                          h-10
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-(--color-border)
                          bg-(--color-background)
                          px-4
                          text-xs
                          font-semibold
                          text-(--color-text-secondary)
                          transition-colors
                          hover:border-(--color-accent)
                          hover:text-(--color-accent)
                        "
                      >
                        <span>GitHub</span>

                        <motion.span
                          whileHover={{
                            x: 2,
                            y: -2,
                          }}
                        >
                          <ArrowUpRight size={14} />
                        </motion.span>
                      </motion.a> */}

                      {/* Live demo */}
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
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
                          h-10
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-(--color-border)
                          bg-(--color-background)
                          px-4
                          text-xs
                          font-semibold
                          text-(--color-text-secondary)
                          transition-colors
                          hover:border-(--color-accent)
                          hover:text-(--color-accent)
                        "
                      >
                        <span>Live</span>

                        <motion.span
                          whileHover={{
                            x: 2,
                            y: -2,
                          }}
                        >
                          <ExternalLink size={14} />
                        </motion.span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
