import React from 'react';
import { Button, CardMedia, Modal, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

import { CommentsList, CommentForm } from './index';
import { BoxModalStyle, ProdInModal } from '../styled/StyledModal';

import prodImage from '../img/prodImage.webp';

const ProductModal = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Child Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
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
