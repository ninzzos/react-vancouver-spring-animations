import React from "react";
import { animated, useSpring } from "react-spring";

const ThereAndBack = ({ deployed }) => {
  const { translateX } = useSpring({
    translateX: deployed ? 200 : -200,
  });

  return (
    <animated.div
      style={{
        margin: '4rem',
        width: "4rem",
        height: "4rem",
        borderRadius: "0.5rem",
        backgroundColor: "#4B4",
        transform: translateX.interpolate(
          value => `translateX(${value}px)`
        ),
      }}
    />
  );
};

export default ThereAndBack;
