import styled from 'styled-components';
import { Box } from '@mui/material';

import { baseTheme } from '../GlobalStyle';


const BoxModalStyle = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: 37.5rem;
  border-radius: 0.25rem;
  background-color: ${baseTheme.colors.background};
  overflow-y: auto;
  @media (max-width: ${baseTheme.sizes.tablet}) {
        padding: 0;
        min-width: auto;
        width: 100%;
        min-height: 100vh;
    };
    &::-webkit-scrollbar { 
    display: none;
  };
`;

const ProdInModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  min-height: 280px;
  h3 {
    margin: 0.25rem;
  }
  p {
    margin: 0.25rem;
  }
`;

const LoadingSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const CommentBlockModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

const CommentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { BoxModalStyle, ProdInModal, LoadingSpan, CommentBlockModal, CommentDiv };
