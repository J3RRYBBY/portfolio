import { motion } from "motion/react";
import { Award, BriefcaseBusiness, Code2, GraduationCap } from "lucide-react";

import { portfolio } from "../data/portfolio";
import Reveal from "./animations/Reveal";

const timelineIcons = {
  Education: GraduationCap,
  Certification: Award,
  "Practical Work": Code2,
};

const timelineDescriptions = {
  "E-Major — Second Year":
    "Continuing my university studies while developing practical skills in software and web development.",

  "ITPEC FE":
    "Passed the Fundamental Information Technology Engineer examination.",

  "Diploma in System Creator Course":
    "Studied software development fundamentals, programming, and related IT concepts.",

  "Web Development Projects":
    "Building practical applications with React, Laravel, JavaScript, MySQL, and modern web development tools.",
};

function Experience() {
  const timeline = [
    ...portfolio.education.map((item) => ({
      ...item,
      organization: item.institution,
      description:
        timelineDescriptions[item.title] ||
        "Continuing to develop my technical and professional skills.",
      icon: timelineIcons[item.type] || GraduationCap,
    })),

    {
      type: "Practical Work",
      title: "Web Development Projects",
      organization: "Personal Projects",
      period: "Ongoing",
      description: timelineDescriptions["Web Development Projects"],
      icon: Code2,
    },
  ];

  return (
    <section
      id="experience"
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
            <p className="section-label">Experience</p>

            <h2 className="section-title mt-4">
              My learning &
              <span className="text-(--color-accent)">
                {" "}
                development journey.
              </span>
            </h2>

            <p className="section-description mt-6 max-w-xl">
              My journey combines formal education, professional certification,
              and hands-on experience building web applications.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "top",
            }}
            className="
              absolute
              bottom-5
              left-5
              top-5
              hidden
              w-px
              bg-(--color-border)
              sm:block
            "
          />

          <div className="space-y-6">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={`${item.title}-${index}`}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    grid
                    gap-5
                    sm:grid-cols-[40px_1fr]
                    sm:gap-8
                  "
                >
                  {/* Timeline icon */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08 + 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      relative
                      z-10
                      hidden
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-(--color-border)
                      bg-(--color-background)
                      text-(--color-accent)
                      sm:flex
                    "
                  >
                    <Icon size={17} />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{
                      y: -3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="portfolio-card p-6 sm:p-7"
                  >
                    <div
                      className="
                        flex
                        flex-col
                        gap-3
                        sm:flex-row
                        sm:items-start
                        sm:justify-between
                      "
                    >
                      <div>
                        <motion.span
                          whileHover={{
                            y: -1,
                          }}
                          className="
                            inline-flex
                            rounded-full
                            bg-(--color-accent-light)
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-(--color-accent)
                          "
                        >
                          {item.type}
                        </motion.span>

                        <h3
                          className="
                            mt-4
                            text-lg
                            font-semibold
                            tracking-tight
                            text-(--color-text)
                          "
                        >
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-(--color-text-secondary)">
                          {item.organization}
                        </p>
                      </div>

                      <span
                        className="
                          shrink-0
                          text-xs
                          font-medium
                          text-(--color-text-muted)
                        "
                      >
                        {item.period}
                      </span>
                    </div>

                    <p
                      className="
                        mt-5
                        max-w-2xl
                        text-sm
                        leading-7
                        text-(--color-text-secondary)
                      "
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Current focus */}
        <Reveal delay={0.15}>
          <motion.div
            whileHover={{
              y: -3,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="
              mt-10
              rounded-2xl
              border
              border-(--color-border)
              bg-(--color-background)
              p-6
              sm:p-8
            "
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-(--color-accent-light)
                  text-(--color-accent)
                "
              >
                <BriefcaseBusiness size={19} />
              </motion.div>

              <div>
                <p className="text-sm font-semibold text-(--color-text)">
                  Currently looking for opportunities
                </p>

                <p className="mt-1 text-sm leading-6 text-(--color-text-secondary)">
                  Open to junior web development, internship, and practical
                  software development opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
