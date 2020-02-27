import React from "react";
import ScaleIn from './ScaleIn'
import HondurasImage from "../public/Honduras.jpg";

const Honduras = () => (
  <ScaleIn>
    <img src={HondurasImage} style={{ borderRadius: '0.5rem' }} alt="Honduras" />
  </ScaleIn>
)

export default Honduras;
