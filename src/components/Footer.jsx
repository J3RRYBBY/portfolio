import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-t border-(--color-border)"
    >
      <div className="portfolio-container">
        <div
          className="
            flex
            flex-col
            gap-6
            py-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Brand */}
          <motion.div
            initial={{
              opacity: 0,
              x: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
          >
            <motion.a
              href="#home"
              whileHover={{ x: 2 }}
              className="
                inline-block
                text-base
                font-semibold
                tracking-tight
                text-(--color-text)
              "
            >
              JERRY<span className="text-(--color-accent)">.</span>
            </motion.a>

            <p className="mt-2 text-xs text-(--color-text-muted)">
              Junior Web Developer
            </p>
          </motion.div>

          {/* Copyright + Back to top */}
          <motion.div
            initial={{
              opacity: 0,
              x: 15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.1,
            }}
            className="flex items-center gap-5"
          >
            <p className="text-xs text-(--color-text-muted)">
              © {currentYear} Kyaw Lin Maung
            </p>

            <motion.a
              href="#home"
              aria-label="Back to top"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.92,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
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
            >
              <motion.span whileHover={{ y: -2 }}>
                <ArrowUp size={15} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
