import Easing from "animated/lib/Easing";
import React, { useState, useEffect } from "react";
import Animated from "animated/lib/targets/react-dom";

const ThereAndBack = ({ deployed, duration = 400 }) => {
  const [translateX] = useState(new Animated.Value(-200));

  useEffect(() => {
    Animated.timing(translateX, {
      duration,
      easing: Easing.linear,
      toValue: deployed ? 200 : -200,
    }).start();
  }, [deployed, duration, translateX]);

  return (
    <Animated.div
      style={{
        margin: "4rem",
        width: "4rem",
        height: "4rem",
        borderRadius: "0.5rem",
        backgroundColor: "#4B4",
        transform: translateX.interpolate({
          inputRange: [-200, 200],
          outputRange: [
            "translateX(-200px)",
            "translateX(200px)",
          ],
        }),
      }}
    />
  );
};

export default ThereAndBack;
