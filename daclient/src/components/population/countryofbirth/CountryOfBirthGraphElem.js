import ChartElem from '../../common/ChartElem'
import CountryLineGraph from './CountyOfBirthLineGraph';
import React from 'react';
import * as DataProvider from '../../common/DataProvider';

class CountryOfBirthGraphElem extends React.Component
{
    constructor(props)
    {
        super(props);
        let keys = DataProvider.GetPopulationByBirthCountryKeys()
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

    GetGraphs(country)
    {
        return(
        <div>
            <select value={this.state.selection} onChange={this.handleChange}>
                {this.GetSelectionOptions()}
            </select>
            <br/>
            <br/>
            <CountryLineGraph country={country}/>
        </div>);
    }

    render()
    {
        return (
            <ChartElem title="Population by Country" type="area-chart" graphs={this.GetGraphs(this.state.selection)}/>
        );
    }
}

export default CountryOfBirthGraphElem;