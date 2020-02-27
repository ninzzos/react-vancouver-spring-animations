import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const { scale, opacity } = useSpring({
    from: { opacity: 0, scale: 0.3 },
    to: { scale: 1, opacity: 1 },
  });

  return (
    <animated.div
      style={{
        opacity,
        overflow: 'hidden',
        transform: scale.interpolate(
          value => `scale(${value})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
};

export default ScaleIn;
