import React from "react";
import { delay, motion } from "framer-motion";
const Hero = ({ trending }) => {
  const heroVariant = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 1, duration: 0.5, when: "beforeChildren" },
    },
  };
  return (
    <div
      className="hero flex"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500${
          trending.results &&
          trending.results[
            Math.floor(Math.random() * trending.results.length - 1)
          ].backdrop_path
        }')`,
        width: "100%",
        height: "500px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="hero__content"
        variants={heroVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          Watch anywhere.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
        >
          Cancel anytime.
        </motion.h1>

        <div className="hero__input flex">
          <motion.input
            initial={{ width: 150 }}
            whileFocus={{ width: "100%" }}
            type="email"
            placeholder="Email"
            style={{ maxWidth: "500px" }}
          />
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
