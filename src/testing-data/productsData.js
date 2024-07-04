export const products = [
        {
                id: 1,
                title: 'Prod 1',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMOUlcm_1UhO81Hul6fSb3rJgjrLeh1GcGQ&s',
                desc: 'Desk about prod 1',
        },
        {
                id: 2,
                title: 'Prod 2',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMOUlcm_1UhO81Hul6fSb3rJgjrLeh1GcGQ&s',
                desc: 'Desk about prod 2',
        },
        {
                id: 3,
                title: 'Prod 3',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMOUlcm_1UhO81Hul6fSb3rJgjrLeh1GcGQ&s',
                desc: 'Desk about prod 3',
        },
        {
                id: 5,
                title: 'Prod 5',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMOUlcm_1UhO81Hul6fSb3rJgjrLeh1GcGQ&s',
                desc: 'Desk about prod 5',
        },
        {
                id: 6,
                title: 'Prod 6',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMOUlcm_1UhO81Hul6fSb3rJgjrLeh1GcGQ&s',
                desc: 'Desk about prod 6',
        },
        {
                id: 7,
                title: 'Prod 7',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMOUlcm_1UhO81Hul6fSb3rJgjrLeh1GcGQ&s',
                desc: 'Desk about prod 7',
        },
        {
                id: 8,
                title: 'Prod 8',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMOUlcm_1UhO81Hul6fSb3rJgjrLeh1GcGQ&s',
                desc: 'Desk about prod 8',
        },
]

export const chartData = [
        { month: 'Jan', learned: 50, total: 987 },
        { month: 'Feb', learned: 100, total: 3000 },
        { month: 'March', learned: 30, total: 1100 },
        { month: 'April', learned: 107, total: 7100 },
        { month: 'May', learned: 95, total: 4300 },
        { month: 'June', learned: 150, total: 7500 },
];

export const pieChartData = [
        { possition: 'Developer', salary: 20 },
        { possition: 'Qa', salary: 10 },
        { possition: 'Pm', salary: 10 },
        { possition: 'DevOps', salary: 25 },
        { possition: 'TeamLead', salary: 35 },
];

export const generateZoomData = (n) => {
        const ret = [];
        let y = 0;
        for (let i = 0; i < n; i += 1) {
                y += Math.round(Math.random() * 10 - 5);
                ret.push({ x: i, y });
        }
        return ret;
};

const getRandom = () => {
        const randomValue = Math.random();
        if (randomValue === 0) {
                return getRandom();
        }
        return randomValue;
};

const normalDistribution = () => {
        const u = getRandom();
        const v = getRandom();
        return Math.sqrt(-4.0 * Math.log(u)) * Math.cos(1.0 * Math.PI * v);
};

export const dataGenerator = (pointCount) => {
        const data = [];
        for (let i = 0; i < pointCount; i += 1) {
                data.push({
                        arg1: normalDistribution(),
                        val1: normalDistribution(),
                        arg2: normalDistribution() + 3,
                        val2: normalDistribution() + 3,
                });
        }
        return data;
};
