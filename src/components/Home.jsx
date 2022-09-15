import React from "react";
import { GetStarted } from "./GetStarted";
import "./styles/Home.css";
export const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="hero__filter"></div>
      <div className="content">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <GetStarted/>
      </div>
    </div>
  );
};
