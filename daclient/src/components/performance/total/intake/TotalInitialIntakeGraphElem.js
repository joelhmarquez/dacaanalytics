import ChartElem from '../../../common/ChartElem'
import InitialLineGraph from '../../InitialLineGraph'

function GetGraphs()
{
    return(
        <div className="row">
            <InitialLineGraph category="intake"/>
        </div>);
}

function TotalInitialIntakeGraphElem()
{
    return (
       <ChartElem title="Initial DACA Application Intake" type="area-chart" graphs={GetGraphs()}/>
    );
}

export default TotalInitialIntakeGraphElem;