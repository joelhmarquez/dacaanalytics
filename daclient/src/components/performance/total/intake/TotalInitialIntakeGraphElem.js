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
       <ChartElem title="DACA Initial Application Intake" type="area-chart" graphs={GetGraphs()}/>
    );
}

export default TotalInitialIntakeGraphElem;