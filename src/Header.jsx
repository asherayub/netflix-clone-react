import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  const headerVaritant = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: { delay: 1, duration: 0.5, type: "spring", stiffness: 120 },
    },
  };
  return (
    <motion.header variants={headerVaritant} initial="hidden" animate="visible">
      <h1 className="logo">!NETFLIX</h1>
    </motion.header>
  );
};

export default Header;
