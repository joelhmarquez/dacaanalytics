import ChartElem from '../../common/ChartElem'
import StateLineGraph from './StateLineGraph';

function GetGraphs()
{
    return(
        <div>
            <StateLineGraph/>
        </div>);
}

function StateGraphElem()
{
    return (
       <ChartElem title="DACA Beneficiaries by State of Residence" type="area-chart" graphs={GetGraphs()}/>
    );
}

export default StateGraphElem;