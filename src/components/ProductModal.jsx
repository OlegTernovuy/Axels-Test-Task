import { CardMedia, Modal, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { BoxModalStyle, ProdInModal } from "../styled/StyledModal";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";
import prodImage from "../img/prodImage.webp";
import { useNavigate } from "react-router-dom";

const ProductModal = () => {
  const [open, setOpen] = React.useState(true);

  const navigate = useNavigate();

  const closeModal = () => {
    setOpen(false);
    navigate("/");
  };
  return (
    <>
      <Modal open={open} onClose={closeModal}>
        <BoxModalStyle>
          <ProdInModal>
            <CardMedia
              component="img"
              height="220"
              image={prodImage}
              alt="product"
            />
            <Typography variant="h5" component="h2">
              Title
            </Typography>
            <Typography variant="body2">Desc</Typography>
          </ProdInModal>
          <Divider />
          <CommentForm />
          <Divider />
          <CommentsList />
        </BoxModalStyle>
      </Modal>
    </>
  );
};

export default ProductModal;
