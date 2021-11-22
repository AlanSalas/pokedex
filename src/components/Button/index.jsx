import React from "react";
import { Button as Btn, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { nextPage } from "../../redux/actions/pokemons";

const Button = ({
  title,
  marginTop,
  border,
  onClick,
  loading,
  sx,
  disabled,
}) => {
  const dispatch = useDispatch();
  const next = useSelector((state) => state.pokemons.next);
  const currentPokemons = useSelector((state) => state.pokemons.pokemons);
  const handleLoadMore = () => {
    dispatch(nextPage(next, currentPokemons));
  };

  return (
    <Btn
      disabled={disabled}
      sx={{
        backgroundColor: "#FF1C1C",
        border: border || 0,
        borderColor: "common.black",
        borderRadius: "4px",
        color: "#fff",
        fontWeight: "bold",
        marginTop: marginTop || 0,
        "&:hover": {
          backgroundColor: "#DF1818",
        },
        ...sx,
      }}
      onClick={onClick || handleLoadMore}
    >
      {loading ? <CircularProgress color="inherit" /> : title}
    </Btn>
  );
};

export default Button;
