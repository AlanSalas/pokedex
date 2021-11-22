import React from "react";
import { useDispatch } from "react-redux";
import { removeError } from "../../redux/actions/ui";
import { Box, Typography, Stack } from "@mui/material";
import { red } from "@mui/material/colors";
import Button from "../Button";
import pokeballGif from "../../assets/pokeball-gif.gif";
import Fade from "../Fade";

const Error = ({ message }) => {
  const dispatch = useDispatch();
  const handleGoBack = () => {
    dispatch(removeError());
  };

  return (
    <Fade>
      <Stack alignItems="center" sx={{ textAlign: "center" }}>
        <Typography variant="h3" sx={{ color: red[600], mb: 2 }}>
          Something goes wrong
        </Typography>
        <Box
          component="img"
          src={pokeballGif}
          sx={{ width: "40%", borderRadius: 1, mb: 2 }}
        />
        <Typography variant="h5">{message}</Typography>
        <Button
          title="Back to Home"
          marginTop={2}
          border={5}
          onClick={handleGoBack}
        />
      </Stack>
    </Fade>
  );
};

export default Error;
