import * as Constants from '../../common/Constants'
import * as DataProvider from '../../common/DataProvider';
import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';

class StateLineGraph extends React.Component
{
    constructor(props)
    {
        super(props);
        let keys = DataProvider.GetPopulationByStateKeys()
        this.state = {keys: keys, selection: keys[0]};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        this.setState({selection: event.target.value});
    }

    GetSelectionOptions()
    {
        let options = []
        for (var option of this.state.keys)
        {
            options.push(<option value={option} key={option}>{option}</option>)
        }

        return options;
    }

    GetLines(data)
    {
        let count = 0;
        let linesDict = {};
    
        data.forEach(function(dict){
            for (var key of Object.keys(dict)){
                if (key !== "year" && !(key in linesDict)){
                    linesDict[key] = <Line type="monotone" name={key} dataKey={key} stroke={Constants.GRAPH_COLOR[count]} activeDot={{ r: 4 }} key={count} />
                    count += 1
                }
            }
        });
    
        return Object.values(linesDict);
    }

    render()
    {
        let data = DataProvider.GetPopulationByState(this.state.selection)
        return (
            <div>
                <select value={this.state.selection} onChange={this.handleChange}>
                    {this.GetSelectionOptions()}
                </select>
                <br/>
                <br/>
                <ResponsiveContainer aspect={3.5}>
                    <LineChart
                        data={data}
                        margin={Constants.GRAPH_MARGIN}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                        <Legend />
                        {this.GetLines(data)}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default StateLineGraph;