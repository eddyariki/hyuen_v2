import React from "react";
import useWindowDimensions from "../../helpers/useWindowDimension";
import Mobile from "../mobile";
import Desktop from "../desktop";
export default function ResponsiveHome() {
  const { width, height } = useWindowDimensions();
  if (height <= width && width <= 768) {
    return <div>Flip your phone.</div>;
  }
  return width >= 768 ? <Desktop /> : <Mobile />;
}
