import { Chart, ScatterSeries } from '@devexpress/dx-react-chart-material-ui';

import { StyledChartPaper } from '../../styled/StyledChartPage';

import { dataGenerator } from '../../testing-data/productsData';

const ScatterChart = () => {
    const SCATTER_DATA = dataGenerator(100);
    return (
        <StyledChartPaper>
            <Chart data={SCATTER_DATA}>
                <ScatterSeries valueField="val1" argumentField="arg1" />
                <ScatterSeries valueField="val2" argumentField="arg2" />
            </Chart>
        </StyledChartPaper>
    );
};

export default ScatterChart;
