import styled from 'styled-components';
import { Paper } from '@mui/material';

import { baseTheme } from './GlobalStyle';

const StyledChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (min-width: ${baseTheme.sizes.tablet}) {
        flex-direction: row;
    }
`;

const StyledChartPaper = styled(Paper)`
    width: 50%;
    height: max-content;
    @media (max-width: ${baseTheme.sizes.tablet}) {
        width: 100%;
    }
`;

export { StyledChartWrapper, StyledChartPaper };
