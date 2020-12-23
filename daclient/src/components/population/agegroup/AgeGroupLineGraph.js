import * as Constants from '../../common/Constants'
import * as DataProvider from '../../common/DataProvider';
import * as Utils from '../../common/Utils'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';

function GetLines(data)
{
    let count = 0;
    let linesDict = {};

    data.forEach(function(dict){
        for (var key of Object.keys(dict)){
            if (key !== "year" && !(key in linesDict)){
                linesDict[key] = <Line type="monotone" name={Utils.GetAgeGroupName(key)} dataKey={key} stroke={Constants.GRAPH_COLOR[count]} activeDot={{ r: 4 }} key={count} />
                count += 1
            }
        }
    });

    return Object.values(linesDict);
}

function AgeGroupLineGraph()
{
    let data = DataProvider.GetAgeGroupByYearData();

    return (
        <ResponsiveContainer aspect={1.6}>
            <LineChart
                data={data}
                margin={Constants.GRAPH_MARGIN}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                <Legend />
                {GetLines(data)}
            </LineChart>
        </ResponsiveContainer>
    );
}

export default AgeGroupLineGraph;