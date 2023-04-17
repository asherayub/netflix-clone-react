import React from "react";

const Hero = ({ trending }) => {
  console.log(trending);
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
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero__content">
        <h1>!NETFLIX</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="hero__input flex">
          <input type="email" placeholder="Email Address" />
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
