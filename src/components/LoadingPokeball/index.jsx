import React from "react";
import { Stack, Typography } from "@mui/material";
import { useSpring, animated } from "react-spring";
import pokeImg from "../../assets/pokeball.png";

const LoadingPokeball = () => {
  const styles = useSpring({
    loop: true,
    from: { rotate: 0 },
    to: { rotate: 360 },
  });

  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Loading...
      </Typography>
      <animated.img
        src={pokeImg}
        style={{ width: "100px", height: "100px", ...styles }}
      />
    </Stack>
  );
};

export default LoadingPokeball;
