import { Modal } from "@mui/material";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import React from "react";
import {
  BoxModalStyle,
  CommentBlockModal,
  ProdInModal,
} from "../styled/StyledModal";

const ProductModal = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <BoxModalStyle>
          <ProdInModal>
            <image src={""} alt={""} />
            <h3>Title</h3>
            <p>Desc</p>
          </ProdInModal>
          <Divider />
          <>
            <CommentBlockModal>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam, quae?
              </p>
              <Rating name="read-only" value={3} readOnly />
            </CommentBlockModal>
          </>
        </BoxModalStyle>
      </Modal>
    </>
  );
};

export default ProductModal;
