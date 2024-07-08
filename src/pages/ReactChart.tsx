import { BarChart, PieChart, ScatterChart, ZoomChart } from '../components';

import { StyledChartWrapper } from '../styled/StyledChartPage';

const ReactChart = () => {
    return (
        <>
            <StyledChartWrapper>
                <BarChart />
                <ZoomChart />
            </StyledChartWrapper>
            <StyledChartWrapper>
                <PieChart />
                <ScatterChart />
            </StyledChartWrapper>
        </>
    );
};

export default ReactChart;
