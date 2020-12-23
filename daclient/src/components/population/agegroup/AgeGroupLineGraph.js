import * as Constants from '../../common/Constants'
import * as DataProvider from '../../common/DataProvider';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

function AgeGroupLineGraph()
{
    let data = DataProvider.GetAgeGroupByYearData();

    return (
        <LineChart
            width={Constants.GRAPH_WIDTH}
            height={Constants.GRAPH_HEIGHT}
            data={data}
            margin={Constants.GRAPH_MARGIN}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
            <Legend />
            <Line type="monotone" name="<16" dataKey="underSixteen" stroke="#CD6155" activeDot={{ r: 4 }} />
            <Line type="monotone" name="16-20" dataKey="sixteenToTwenty" stroke="#AF7AC5" activeDot={{ r: 4 }} />
            <Line type="monotone" name="21-25" dataKey="twentOneToTwentyFive" stroke="#5DADE2" activeDot={{ r: 4 }} />
            <Line type="monotone" name="26-30" dataKey="twentySixToThrity" stroke="#48C9B0" activeDot={{ r: 4 }} />
            <Line type="monotone" name="31-35" dataKey="thirtyOneToThirtyFive" stroke="#F4D03F" activeDot={{ r: 4 }} />
            <Line type="monotone" name="31-36" dataKey="thirtyOneToThirthySix" stroke="#5D6D7E" activeDot={{ r: 4 }} />
            <Line type="monotone" name="Unknown" dataKey="unknown" stroke="#F5B041" activeDot={{ r: 4 }} />
        </LineChart>
    );
}

export default AgeGroupLineGraph;