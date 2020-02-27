import React, { useState, useEffect } from "react";
import Animated from "animated/lib/targets/react-dom";

const Fade = ({ duration = 1500, children }) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      duration,
      toValue: 1,
    }).start()
  }, []);

  return (
    <Animated.div style={{ opacity }}>
      {children}
    </Animated.div>
  );
};

export default Fade;
