import * as Constants from '../../common/Constants'
import * as DataProvider from '../../common/DataProvider';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';

function GetBars(data)
{
    let count = 0;
    let barsDict = {};

    data.forEach(function(dict){
        for (var key of Object.keys(dict)){
            if (key !== "year" && !(key in barsDict)){
                barsDict[key] = <Bar name={key.charAt(0).toUpperCase() + key.slice(1)} dataKey={key} fill={Constants.GRAPH_COLOR[count]} key={count} />
                count += 1
            }
        }
    });

    return Object.values(barsDict);
}

function MaritalStatusBarGraph()
{
    let data = DataProvider.GetMaritalStatusByYearData();

    return (
        <ResponsiveContainer aspect={1.6}>
            <BarChart
                data={data}
                margin={Constants.GRAPH_MARGIN}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                <Legend />
                {GetBars(data)}
            </BarChart>
        </ResponsiveContainer>
    );
}

export default MaritalStatusBarGraph;