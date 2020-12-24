import * as Constants from './utils/Constants'
import {
    BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';

function BarGraph(props)
{
    return (
        <ResponsiveContainer aspect={props.aspect}>
            <BarChart
                data={props.data}
                margin={Constants.GRAPH_MARGIN}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                <Legend />
                {props.bars}
            </BarChart>
        </ResponsiveContainer>
    );
}

export default BarGraph;