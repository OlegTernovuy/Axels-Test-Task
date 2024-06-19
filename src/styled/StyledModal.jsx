import { Box } from "@mui/material";
import styled from "styled-components";

const BoxModalStyle = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  max-height: 37.5rem;
  border-radius: 0.25rem;
  background-color: #e9f2eb;
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
  align-items: center;
`;

export { BoxModalStyle, ProdInModal, CommentBlockModal };
