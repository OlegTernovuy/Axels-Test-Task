import { Chart, PieSeries } from '@devexpress/dx-react-chart-material-ui';

import { StyledChartPaper } from '../../styled/StyledChartPage';

import { PIE_CHART_DATA } from '../../testing-data/productsData';

const PieChart = () => (
    <StyledChartPaper>
        <Chart data={PIE_CHART_DATA}>
            <PieSeries valueField="salary" argumentField="possition" />
        </Chart>
    </StyledChartPaper>
);

export default PieChart;
