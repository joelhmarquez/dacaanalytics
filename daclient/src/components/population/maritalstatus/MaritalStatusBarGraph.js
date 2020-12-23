import * as Constants from '../../common/Constants'
import * as DataProvider from '../../common/DataProvider';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

function MaritalStatusBarGraph()
{
    let data = DataProvider.GetMaritalStatusByYearData();

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
            <Bar name="Single" dataKey="single" fill="#CD6155" />
            <Bar name="Married" dataKey="married" fill="#AF7AC5" />
            <Bar name="Divorced" dataKey="divorced" fill="#5DADE2" />
            <Bar name="Widowed" dataKey="widowed" fill="#48C9B0" />
            <Bar name="Unknown" dataKey="unknown" fill="#F4D03F" />
        </BarChart>
    );
}

export default MaritalStatusBarGraph;