import ChartElem from '../common/ChartElem'
import LineGraph from '../common/LineGraph'
import * as Constants from '../common/utils/Constants';
import * as DataProvider from '../common/utils/DataProvider';
import * as Utils from '../common/utils/Utils'
import React from 'react';

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

    GetContent()
    {
        let data = DataProvider.GetPopulationByBirthCountry(this.state.selection);
        let lines = Utils.GetLinesFromData(data)
        return(
            <div>
                <select value={this.state.selection} onChange={this.handleChange}>
                    {this.GetSelectionOptions()}
                </select>
                <br/>
                <br/>
                <LineGraph aspect={Constants.SINGLE_GRAPH_ASPECT} data={data} lines={lines}/>
            </div>);
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

    render()
    {
        return (
            <ChartElem title="DACA Beneficiaries by Country of Birth" content={this.GetContent()}/>
         );
    }
}

export default CountryOfBirthGraphElem;