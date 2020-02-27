import React from "react";
import clamp from "lodash-es/clamp";
import { useGesture } from "react-with-gesture";
import { animated, useSpring, config } from "react-spring";

const PullRelease = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8);
    set({
      xy: down ? delta : [0, 0],
      config: down ? {
        friction: 45,
        mass: velocity,
        tension: 500 * velocity,
      } : config.wobbly,
    });
  });

  return (
    <animated.div
      {...bind()}
      style={{
        cursor: 'grab',
        color: "white",
        width: "150px",
        height: "150px",
        display: "flex",
        fontSize: '24px',
        userSelect: 'none',
        borderRadius: "50%",
        marginBottom: '25px',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "hotpink",
        boxShadow: "0px 0px 5px #FFF8",
        transform: xy.interpolate(
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
    >
      PULL
    </animated.div>
  );
};

export default PullRelease;
