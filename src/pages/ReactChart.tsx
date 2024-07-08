import { BarChart, PieChart, ScatterChart, ZoomChart } from '../components';
import HorizontalBarChart from '../components/charts/HorizontalBarChart';

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
            <StyledChartWrapper>
                <HorizontalBarChart/>
            </StyledChartWrapper>
        </>
    );
};

export default ReactChart;
