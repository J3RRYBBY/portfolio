import { AnimatePresence, motion } from "motion/react";
import { useForm } from "@formspree/react";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, Mail, Send } from "lucide-react";

import { portfolio } from "../data/portfolio";
import Reveal from "./animations/Reveal";

function Contact() {
  const [state, formspreeSubmit] = useForm("xgaoebej");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Derive status directly from Formspree.
  const status = state.submitting
    ? "sending"
    : state.succeeded
      ? "success"
      : state.errors
        ? "error"
        : "idle";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await formspreeSubmit(formData);

    // Reset only after a successful submission.
    if (!state.succeeded) {
      // Formspree updates its state asynchronously.
      // Success is handled by the derived status above.
      return;
    }

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const inputClassName = `
    mt-2
    h-11
    w-full
    rounded-xl
    border
    border-(--color-border)
    bg-(--color-background)
    px-4
    text-sm
    placeholder:text-sm
    text-(--color-text)
    outline-none
    placeholder:text-(--color-text-muted)
    transition-colors
    focus:border-(--color-accent)
    focus:ring-1
    focus:ring-(--color-accent)/10
  `;

  return (
    <section
      id="contact"
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
            <p className="section-label">Contact</p>

            <h2 className="section-title mt-4">
              Let's build something
              <span className="text-(--color-accent)"> together.</span>
            </h2>

            <p className="section-description mt-6 max-w-xl">
              Have a project idea, internship opportunity, or just want to
              connect? Feel free to send me a message.
            </p>
          </div>
        </Reveal>

        {/* Contact content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Contact information */}
          <Reveal direction="left">
            <div>
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${portfolio.email}`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="
                    portfolio-card
                    flex
                    items-center
                    gap-4
                    p-5
                    transition-colors
                    hover:border-(--color-accent)
                  "
                >
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
                    <Mail size={19} />
                  </motion.div>

                  <div className="min-w-0">
                    <p className="text-xs text-(--color-text-muted)">Email</p>

                    <p className="mt-1 truncate text-sm font-medium text-(--color-text)">
                      {portfolio.email}
                    </p>
                  </div>

                  <motion.span
                    whileHover={{
                      x: 2,
                      y: -2,
                    }}
                    className="ml-auto shrink-0 text-(--color-text-muted)"
                  >
                    <ArrowUpRight size={16} />
                  </motion.span>
                </motion.a>
              </div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8"
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-(--color-text-muted)
                  "
                >
                  Find me online
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {/* <motion.a
                    href={portfolio.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
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
                      px-4
                      py-2.5
                      text-sm
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
                      <ArrowUpRight size={14} />
                    </motion.span>
                  </motion.a> */}

                  {/* Add LinkedIn when available */}
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal direction="right" delay={0.1}>
            <motion.form
              onSubmit={handleSubmit}
              whileHover={{ y: -2 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className="portfolio-card p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-(--color-text)"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    disabled={state.submitting}
                    className={inputClassName}
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-(--color-text)"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    disabled={state.submitting}
                    className={inputClassName}
                  />
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="mt-5"
              >
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-(--color-text)"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  disabled={state.submitting}
                  className="
                    mt-2
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-(--color-border)
                    bg-(--color-background)
                    px-4
                    py-3
                    text-sm
                    placeholder:text-sm
                    leading-6
                    text-(--color-text)
                    outline-none
                    placeholder:text-(--color-text-muted)
                    transition-colors
                    focus:border-(--color-accent)
                    focus:ring-2
                    focus:ring-(--color-accent)/10
                  "
                />
              </motion.div>

              {/* Status messages */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, height: 0, y: -8 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -8 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      overflow-hidden
                      rounded-xl
                      border
                      border-(--color-border)
                      bg-(--color-accent-light)
                      px-4
                      py-3
                      text-sm
                      text-(--color-accent)
                    "
                  >
                    <CheckCircle2 size={17} />

                    <span>
                      Message sent successfully. I'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, height: 0, y: -8 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -8 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      mt-5
                      overflow-hidden
                      rounded-xl
                      border
                      border-(--color-border)
                      bg-(--color-background)
                      px-4
                      py-3
                      text-sm
                      text-(--color-text)
                    "
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={state.submitting || state.succeeded}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="
                  btn-accent
                  mt-5
                  w-full
                  sm:w-auto
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:transform-none
                "
              >
                <AnimatePresence mode="wait">
                  {state.submitting ? (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="inline-flex items-center gap-2"
                    >
                      Sending
                      <Loader2 size={16} className="animate-spin" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="inline-flex items-center gap-2"
                    >
                      Send Message
                      <Send size={16} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
