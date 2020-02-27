import React, { useState } from "react";
import ThereAndBack from "./ThereAndBack";
import TraditionalThereAndBack from "./ThereAndBack.traditional";

const Comparison = () => {
  const [deployed, set] = useState(false);
  const toggle = () => set(prevState => !prevState);

  return (
    <div style={{ cursor: 'pointer' }} onClick={toggle}>
      <p>Time Based</p>
      <TraditionalThereAndBack deployed={deployed} />

      <p>Spring Based</p>
      <ThereAndBack deployed={deployed} />
    </div>
  );
};

export default Comparison;
