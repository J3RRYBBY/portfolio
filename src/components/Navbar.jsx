import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { portfolio } from "../data/portfolio";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      let currentSection = "about";

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        border-(--color-border)
        bg-(--color-background)/90
        backdrop-blur-xl
      "
    >
      <div className="portfolio-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={closeMenu}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className="
              text-base
              font-semibold
              tracking-tight
              text-(--color-text)
            "
          >
            {portfolio.shortName}
            <span className="text-(--color-accent)">.</span>
          </motion.a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  className={`
                    group
                    relative
                    py-1
                    text-sm
                    font-medium
                    transition-colors
                    ${
                      isActive
                        ? "text-(--color-accent)"
                        : "text-(--color-text-secondary) hover:text-(--color-accent)"
                    }
                  `}
                >
                  {item.name}

                  <motion.span
                    layout
                    className={`
                      absolute
                      -bottom-1
                      left-0
                      h-0.5
                      rounded-full
                      bg-(--color-accent)
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                </motion.a>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="btn-accent px-4 py-2.5 text-xs"
            >
              Let's Talk
              <motion.span
                whileHover={{
                  x: 2,
                  y: -2,
                }}
              >
                <ArrowUpRight size={14} />
              </motion.span>
            </motion.a>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <motion.button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              whileTap={{ scale: 0.92 }}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-(--color-border)
                text-(--color-text-secondary)
                transition-colors
                hover:border-(--color-accent)
                hover:text-(--color-accent)
              "
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                overflow-hidden
                border-t
                border-(--color-border)
                md:hidden
              "
            >
              <nav className="space-y-1 py-4">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.href.slice(1);

                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.04,
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        transition-colors
                        ${
                          isActive
                            ? "bg-(--color-accent-light) text-(--color-accent)"
                            : "text-(--color-text-secondary) hover:bg-(--color-surface-hover) hover:text-(--color-text)"
                        }
                      `}
                    >
                      <motion.span
                        animate={{
                          scale: isActive ? 1 : 0.7,
                          opacity: isActive ? 1 : 0,
                        }}
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-(--color-accent)
                        "
                      />

                      {item.name}
                    </motion.a>
                  );
                })}
              </nav>

              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.25,
                  delay: 0.2,
                }}
                whileTap={{ scale: 0.98 }}
                className="btn-accent mb-4 w-full"
              >
                Let's Talk
                <ArrowUpRight size={15} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Navbar;
