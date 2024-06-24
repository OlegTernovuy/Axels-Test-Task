import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CardMedia, Modal, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

import { CommentsList, CommentForm } from './index';
import { BoxModalStyle, ProdInModal } from '../styled/modal/StyledModal';
import { ModalCloseButton } from '../styled/modal/StyledCloseModalButton';

import prodImage from '../img/prodImage.webp';

const ProductModal = () => {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  const closeModal = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <>
      <Modal open={open} onClose={closeModal}>
        <BoxModalStyle>
          <ModalCloseButton onClick={closeModal} />
          <ProdInModal>
            <CardMedia
              component='img'
              height='220'
              image={prodImage}
              alt='product'
            />
            <Typography variant='h5' component='h2'>
              Title
            </Typography>
            <Typography variant='body2'>Desc</Typography>
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
