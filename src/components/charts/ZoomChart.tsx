import {
    Chart,
    LineSeries,
    ZoomAndPan,
} from '@devexpress/dx-react-chart-material-ui';

import { StyledChartPaper } from '../../styled/StyledChartPage';

import { generateZoomData } from '../../testing-data/productsData';

const ZoomChart = () => {
    const ZOOM_DATA = generateZoomData(100);
    return (
        <StyledChartPaper>
            <Chart data={ZOOM_DATA}>
                <LineSeries valueField="y" argumentField="x" />
                <ZoomAndPan />
            </Chart>
        </StyledChartPaper>
    );
};

export default ZoomChart;
