import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Actions
import { closeModal } from "../../redux/actions/ui";
// Components
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import LoadingPokeball from "../LoadingPokeball";
import ContentInfoDialog from "../ContentInfoDialog";

const InfoDialog = () => {
  const dispatch = useDispatch();
  const { number, dataStats, detail, types, image } = useSelector(
    (state) => state.pokemon
  );

  const open = useSelector((state) => state.ui.openModal);
  const loadingDetail = useSelector((state) => state.ui.loadingDetail);

  const handleClose = () => dispatch(closeModal());

  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: { xs: "60%", sm: "auto" },
    width: { xs: "100%", sm: "80%", md: "55%", lg: "40%" },
    bgcolor: "background.paper",
    borderRadius: 1.5,
    boxShadow: 24,
    p: 3,
    pt: 7,
    outline: "none",
    overflow: { xs: "auto", sm: "visible" },
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {loadingDetail ? (
            <LoadingPokeball />
          ) : (
            <ContentInfoDialog
              image={image}
              number={number}
              detail={detail && detail}
              types={types}
              dataStats={dataStats}
            />
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default InfoDialog;
