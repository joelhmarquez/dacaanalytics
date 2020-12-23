import ChartElem from '../../common/ChartElem'
import CountryOfBirthLineGraph from './CountyOfBirthLineGraph';

function GetGraphs()
{
    return(
        <div>
            <CountryOfBirthLineGraph/>
        </div>);
}

function CountryOfBirthGraphElem()
{
    return (
       <ChartElem title="Population by Country of Birth" type="area-chart" graphs={GetGraphs()}/>
    );
}

export default CountryOfBirthGraphElem;