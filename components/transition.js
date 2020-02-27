import React, { useState, useEffect } from "react";
import {
  useTransition,
  animated,
  config,
} from "react-spring";

const useToggle = (timeout = 1400) => {
  const [toggle, set] = useState(false);
  useEffect(() => {
    const switcher = setInterval(
      () => set(prevState => !prevState),
      timeout
    );

    return () => clearInterval(switcher);
  }, [timeout]);

  return toggle;
};

const Transition = () => {
  const toggle = useToggle();
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  return transitions.map(
    ({ item, key, props: { opacity } }) => (
      <animated.span
        key={key}
        style={{
          opacity,
          fontSize: "8rem",
          position: "absolute",
        }}
      >
        {item ? "😄" : "🤪"}
      </animated.span>
    )
  );
};

export default Transition;
