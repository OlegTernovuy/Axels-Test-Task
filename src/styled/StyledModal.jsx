import styled from 'styled-components';

import { Box } from '@mui/material';

import { baseTheme } from './GlobalStyle';


const BoxModalStyle = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  max-height: 37.5rem;
  border-radius: 0.25rem;
  background-color: ${baseTheme.colors.background};
  padding: 1rem;
  overflow-y: auto;
`;

const ProdInModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 0.25rem;
  }
  p {
    margin: 0.25rem;
  }
`;

const CommentBlockModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CommentDiv = styled.div`
  display: flex;
  align-items: center;
`;

export { BoxModalStyle, ProdInModal, CommentBlockModal, CommentDiv };
