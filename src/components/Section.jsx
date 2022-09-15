import React from "react";
import "./styles/Section.css";
export const Section = ({
  leftTitle,
  leftText,
  leftImg,
  rightTitle,
  rightText,
  rightImg,
}) => {
  return (
    <div className="section__wrapper">
      {leftTitle ? (
        <div className="section__left">
          <h1>{leftTitle}</h1> <p>{leftText}</p>
        </div>
      ) : (
        <h1 className="leftImg">{leftImg}</h1>
      )}
      {rightTitle ? (
        <div className="section__right">
          <h1>{rightTitle}</h1>
          <p>{rightText}</p>
        </div>
      ) : (
        <h1 className = "rightImg">{rightImg}</h1>
      )}
    </div>
  );
};
