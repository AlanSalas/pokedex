import React from "react";
import { useSpring, animated } from "react-spring";

const Fade = ({ children }) => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div style={{ height: "100%", ...styles }}>
      {children}
    </animated.div>
  );
};

export default Fade;
