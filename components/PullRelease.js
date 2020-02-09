import React from "react";
import clamp from "lodash-es/clamp";
import { useGesture } from "react-with-gesture";
import { animated, useSpring } from "react-spring";

const PullRelease = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8);
    set({
      xy: down ? delta : [0, 0],
      config: {
        friction: 50,
        mass: velocity,
        tension: 500 * velocity,
      },
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
        boxShadow: "-1px 2px 3px #8888",
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
