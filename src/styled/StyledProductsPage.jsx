import { Grid } from "@mui/material";
import styled from "styled-components";

const StyledDiv = styled.div`
  min-height: 100vh;
  margin: 0 auto;
`;

const GridStyle = styled(Grid)`
  > * {
    display: flex;
    justify-content: center;
    border: 1px solid;
  }
`;

export { StyledDiv, GridStyle };
