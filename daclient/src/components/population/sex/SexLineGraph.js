import * as Constants from '../../common/Constants'
import * as DataProvider from '../../common/DataProvider';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

function SexLineGraph()
{
    let data = DataProvider.GetSexByYearData();

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
            <Line type="monotone" name="Male" dataKey="male" stroke="#29B6F6" activeDot={{ r: 4 }} />
            <Line type="monotone" name="Female" dataKey="female" stroke="#F06292" activeDot={{ r: 4 }} />
            <Line type="monotone" name="unknown" dataKey="unknown" stroke="#BDBDBD" activeDot={{ r: 4 }} />
        </LineChart>
    );
}

export default SexLineGraph;