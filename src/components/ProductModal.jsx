import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardMedia, Modal, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

import { CommentsList, CommentForm } from './index';
import { BoxModalStyle, ProdInModal } from '../styled/modal/StyledModal';
import { ModalCloseButton } from '../styled/modal/StyledCloseModalButton';

import { fetchSingleProduct } from '../redux/ducks/productsSlice';
import Selectors from '../redux/selectors';

const ProductModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { prodId } = useParams();

  const [open, setOpen] = useState(true);
  const singleProduct = useSelector(Selectors.product);
  const loading = useSelector(Selectors.singleProdLoading);

  useEffect(() => {
    if (!prodId) return undefined;
    dispatch(fetchSingleProduct());
  }, [prodId, dispatch]);

  const closeModal = () => {
    setOpen(false);
    navigate('/');
  };

  return (
    <Modal open={open} onClose={closeModal}>
      <BoxModalStyle>
        <ModalCloseButton onClick={closeModal} />
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            <ProdInModal>
              <CardMedia
                component='img'
                height='220'
                image={singleProduct.img}
                alt='product'
              />
              <Typography variant='h5' component='h2'>
                {singleProduct.title}
              </Typography>
              <Typography variant='body2'>{singleProduct.desc}</Typography>
            </ProdInModal>
            <Divider />
            <CommentForm />
            <Divider />
            <CommentsList comments={singleProduct.comments} />
          </>
        )}
      </BoxModalStyle>
    </Modal>
  );
};

export default ProductModal;
