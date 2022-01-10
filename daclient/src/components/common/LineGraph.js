import * as Constants from './utils/Constants'
import {
    LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';

function LineGraph(props)
{
    return (
        <ResponsiveContainer height={props.height}>
            <LineChart
                data={props.data}
                margin={Constants.GRAPH_MARGIN}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                <Legend />
                {props.lines}
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineGraph;