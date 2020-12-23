import * as Constants from '../../common/Constants'
import * as DataProvider from '../../common/DataProvider';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

function MaritalStatusLineGraph()
{
    let data = DataProvider.GetMaritalStatusByYearData();

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
            <Line type="monotone" name="Single" dataKey="single" stroke="#CD6155" activeDot={{ r: 4 }} />
            <Line type="monotone" name="Married" dataKey="married" stroke="#AF7AC5" activeDot={{ r: 4 }} />
            <Line type="monotone" name="Divorced" dataKey="divorced" stroke="#5DADE2" activeDot={{ r: 4 }} />
            <Line type="monotone" name="Widowed" dataKey="widowed" stroke="#48C9B0" activeDot={{ r: 4 }} />
            <Line type="monotone" name="Unknown" dataKey="unknown" stroke="#F5B041" activeDot={{ r: 4 }} />
        </LineChart>
    );
}

export default MaritalStatusLineGraph;