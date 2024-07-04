import {
    Chart,
    BarSeries,
    Legend,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, ValueScale } from '@devexpress/dx-react-chart';

import { StyledChartPaper } from '../../styled/StyledChartPage';

import { CHART_DATA } from '../../testing-data/productsData';

const BarChart = () => (
    <StyledChartPaper>
        <Chart data={CHART_DATA}>
            <ValueScale name="learned" />
            <ValueScale name="total" />
            <BarSeries
                name="Lessons learned"
                valueField="learned"
                argumentField="month"
                scaleName="learned"
            />
            <LineSeries
                name="Total Education lessons"
                valueField="total"
                argumentField="month"
                scaleName="total"
            />
            <Animation />
            <Legend />
        </Chart>
    </StyledChartPaper>
);

export default BarChart;
