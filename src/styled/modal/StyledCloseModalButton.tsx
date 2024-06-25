import styled from 'styled-components';

import { baseTheme } from '../GlobalStyle';

const ModalCloseButton = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  &:before,
  &:after {
    position: absolute;
    left: 8px;
    content: ' ';
    height: 16px;
    width: 1px;
    background-color: ${baseTheme.colors.primary};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export { ModalCloseButton };
