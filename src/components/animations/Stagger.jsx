import { motion } from "motion/react";

import { motionConfig, staggerContainer, fadeUp } from "../../config/motion";

function Stagger({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={motionConfig.viewport}
      transition={{
        delayChildren: delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={motionConfig.transition}
    >
      {children}
    </motion.div>
  );
}

export default Stagger;
