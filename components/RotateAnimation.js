import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const initialAnimationState = {
  opacity: 0,
  color: "#FFF",
  cursor: "pointer",
  userSelect: "none",
  transform: "rotate(-360deg) scale(0)",
};

const finalAnimationState = {
  opacity: 1,
  transform: "rotate(360deg) scale(1)",
};

const RotateAnimation = ({ children }) => {
  const [reset, setReset] = useState(true);
  const animation = useSpring({
    reset,    
    to: finalAnimationState,
    from: initialAnimationState,
    onRest: () => setReset(false),
  });

  return (
    <animated.div
      style={animation}
      onClick={() => setReset(true)}
    >
      {children}
    </animated.div>
  );
};

export default RotateAnimation;
