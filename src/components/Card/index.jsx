import React from "react";
// Redux
import { useDispatch } from "react-redux";
// Actions
import { getDetailPoke } from "../../redux/actions/pokemon";
import { openModal } from "../../redux/actions/ui";
// Components
import Type from "../Type";
import { Box, Chip, Stack } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Fade from "../Fade";

const Card = ({ id, name, image, types }) => {
  const dispatch = useDispatch();
  const numbers = { 1: `00${id}`, 2: `0${id}`, 3: id };
  const number = numbers[id && id.toString().length];

  const openInfoDialog = () => {
    dispatch(openModal());
    dispatch(getDetailPoke(id, number, types, image));
  };

  return (
    <Fade>
      <Box
        onClick={openInfoDialog}
        sx={{
          height: "10rem",
          display: "flex",
          backgroundColor: blueGrey[200],
          borderRadius: 1.5,
          boxShadow: 5,
          p: 3,
          cursor: "pointer",
        }}
      >
        {/* Image */}
        <Box
          component="img"
          sx={{
            width: "7rem",
            height: "7rem",
            objectFit: "contain",
          }}
          src={image}
        />
        {/* InfoPoke */}
        <Stack
          alignItems="flex-end"
          justifyContent="space-between"
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          {/* ID */}
          <Box>
            <Chip
              sx={{ backgroundColor: "#eee", fontWeight: "bold", boxShadow: 1 }}
              label={`#${number}`}
            />
          </Box>
          {/* Types */}
          <Stack direction="row" spacing={2}>
            {types &&
              types.map((type) => (
                <Type key={type.type.name} type={type} position="bottom" />
              ))}
          </Stack>
          {/* Name */}
          <Box>
            <Box
              sx={{
                typography: "body1",
                textTransform: "capitalize",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "black",
              }}
            >
              {name}
            </Box>
          </Box>
        </Stack>
      </Box>
    </Fade>
  );
};

export default Card;
