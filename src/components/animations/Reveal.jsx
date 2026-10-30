import { motion } from "motion/react";

import { motionConfig, fadeUp, fadeLeft, fadeRight } from "../../config/motion";

const variants = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
};

function Reveal({
  children,
  direction = "up",
  delay = 0,
  amount,
  className = "",
}) {
  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        ...motionConfig.viewport,
        ...(amount !== undefined && { amount }),
      }}
      transition={{
        ...motionConfig.transition,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
