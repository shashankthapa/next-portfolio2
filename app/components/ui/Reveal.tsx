"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "100%" | "fit-content";
  cssPropertyMotion?: string | "";
  cssProperty?: string | "";
  id: string;
}

const Reveal: React.FC<Props> = ({
  children,
  cssPropertyMotion,
  width,
  cssProperty,
  id,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <div
      id={id}
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
      className={`${cssProperty}`}
    >
      <motion.div
        className={`${cssPropertyMotion}`}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
