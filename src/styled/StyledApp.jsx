import styled from 'styled-components';

import { baseTheme } from './GlobalStyle';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${baseTheme.sizes.desktop};
  margin: 0 auto;
`;

export { AppDiv };
