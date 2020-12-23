import * as Constants from '../../common/Constants'
import * as DataProvider from '../../common/DataProvider';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

function AgeGroupBarGraph()
{
    let data = DataProvider.GetAgeGroupByYearData();

    return (
        <BarChart
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
            <Bar name="<16" dataKey="underSixteen" fill="#CD6155" />
            <Bar name="16-20" dataKey="sixteenToTwenty" fill="#AF7AC5" />
            <Bar name="21-25" dataKey="twentOneToTwentyFive" fill="#5DADE2" />
            <Bar name="26-30" dataKey="twentySixToThrity" fill="#48C9B0" />
            <Bar name="31-35" dataKey="thirtyOneToThirtyFive" fill="#F4D03F" />
            <Bar name="31-36" dataKey="thirtyOneToThirtySix" fill="#5D6D7E" />
            <Bar name="36-37" dataKey="thirtySixToThirtySeven" fill="#BDC3C7" />
            <Bar name="36-39" dataKey="thirtySixToThirtyNine" fill="#F6DDCC" />
            <Bar name="Unknown" dataKey="unknown" fill="#F5B041" />
        </BarChart>
    );
}

export default AgeGroupBarGraph;