import { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
    Scheduler,
    Appointments,
    WeekView,
    AllDayPanel,
    MonthView,
    DayView,
    Toolbar,
    ViewSwitcher,
    DateNavigator,
    TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';

import { SCHEDULER_DATA } from '../testing-data/productsData';

const ReactScheduler = () => {
    const [currentViewName, setCurrentViewName] = useState('work-week');

    const handleCurrentViewName = (newViewName) => {
        setCurrentViewName(newViewName);
    };

    return (
        <Paper>
            <Scheduler data={SCHEDULER_DATA} height={660}>
                <ViewState
                    defaultCurrentDate="2024-07-04"
                    currentViewName={currentViewName}
                    onCurrentViewNameChange={handleCurrentViewName}
                />
                <WeekView startDayHour={9} endDayHour={19} />
                <WeekView
                    name="work-week"
                    displayName="Work Week"
                    excludedDays={[0, 6]}
                    startDayHour={9}
                    endDayHour={19}
                />
                <MonthView />
                <DayView />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <ViewSwitcher />
                <Appointments />
                <AllDayPanel />
            </Scheduler>
        </Paper>
    );
};

export default ReactScheduler;
