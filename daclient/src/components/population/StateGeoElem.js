import ChartElem from '../common/ChartElem'
import GeoMap from '../common/GeoMap';
import React from 'react';
import * as Utils from '../common/utils/Utils'
import * as DataProvider from '../common/utils/DataProvider';

class StateGeoElem extends React.Component
{
    constructor(props)
    {
        super(props);

        let keys = DataProvider.GetPopulationByStateYearKeys()
        this.state = {keys: keys, selection: keys[keys.length-1]};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        this.setState({selection: event.target.value});
    }

    GetContent()
    {
        let data = DataProvider.GetPopulationByStateForYear(this.state.selection);
        return(
            <div>
                <select value={this.state.selection} onChange={this.handleChange}>
                    {this.GetSelectionOptions()}
                </select>
                <br/>
                <br/>
                <GeoMap data={data} options={Utils.GetStateGeoMapOptions()}/>
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
            <ChartElem title="DACA Beneficiaries by State of Residence" content={this.GetContent()}/>
         );
    }
}

export default StateGeoElem;