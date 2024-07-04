import { Chart, PieSeries } from '@devexpress/dx-react-chart-material-ui';

import { StyledChartPaper } from '../../styled/StyledChartPage';

import { pieChartData } from '../../testing-data/productsData';

const PieChart = () => {
    return (
        <StyledChartPaper>
            <Chart data={pieChartData}>
                <PieSeries valueField="salary" argumentField="possition" />
            </Chart>
        </StyledChartPaper>
    );
};

export default PieChart;
