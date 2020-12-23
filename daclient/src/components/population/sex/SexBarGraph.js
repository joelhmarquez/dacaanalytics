import * as Constants from '../../common/Constants'
import * as DataProvider from '../../common/DataProvider';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

function SexBarGraph()
{
    let data = DataProvider.GetSexByYearData();

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
            <Bar name="Male" dataKey="male" fill="#29B6F6" />
            <Bar name="Female" dataKey="female" fill="#F06292" />
            <Bar name="Unknown" dataKey="unknown" fill="#BDBDBD" />
        </BarChart>
    );
}

export default SexBarGraph;