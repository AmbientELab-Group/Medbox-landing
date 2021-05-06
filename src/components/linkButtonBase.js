import React from "react";
import { motion } from "framer-motion";

const LinkButtonBase = ({
  children,
  className,
  href,
  clickHandler,
}) => {
  const handler = (e) => {
    if (clickHandler) {
      e.preventDefault();
      clickHandler();
    }
  };

  return (
    <motion.a
      className={className}
      onClick={handler}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={href}
    >
      {children}
    </motion.a>
  );
};

export default LinkButtonBase;
