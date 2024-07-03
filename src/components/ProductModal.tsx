import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

import { CommentsList, CommentForm } from './index';
import {
    BoxModalStyle,
    LoadingSpan,
    ProdInModal,
} from '../styled/modal/StyledModal';
import { ModalCloseButton } from '../styled/modal/StyledCloseModalButton';
import { StyledCardMedia } from '../styled/StyledProductCard';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchSingleProduct } from '../redux/ducks/products';
import Selectors from '../redux/ducks/selectors';

const ProductModal = () => {
    const loading = useAppSelector(Selectors.singleProdLoading);
    const singleProduct = useAppSelector(Selectors.product);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (id) dispatch(fetchSingleProduct());
    }, [id, dispatch]);

    const closeModal = () => {
        setOpen(false);
        navigate('/');
    };

    return (
        <div>
            <Modal open={open} onClose={closeModal}>
                <BoxModalStyle>
                    <ModalCloseButton onClick={closeModal} />
                    {loading ? (
                        <LoadingSpan>Loading...</LoadingSpan>
                    ) : (
                        <>
                            <ProdInModal>
                                <StyledCardMedia
                                    height="220"
                                    src={singleProduct.img}
                                    alt="product"
                                />
                                <Typography variant="h5" component="h2">
                                    {singleProduct.title}
                                </Typography>
                                <Typography variant="body2">
                                    {singleProduct.desc}
                                </Typography>
                            </ProdInModal>
                            <Divider />
                            <CommentForm />
                            <Divider />
                            <CommentsList comments={singleProduct.comments} />
                        </>
                    )}
                </BoxModalStyle>
            </Modal>
        </div>
    );
};

export default ProductModal;
