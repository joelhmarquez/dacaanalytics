import ChartElem from '../../../common/ChartElem'
import InitialLineGraph from '../../InitialLineGraph'

function GetGraphs()
{
    return(
        <div className="row">
            <InitialLineGraph category="caseStatus"/>
        </div>);
}

function TotalInitialCaseStatusGraphElem()
{
    return (
       <ChartElem title="Initial DACA Application Case Status" type="area-chart" graphs={GetGraphs()}/>
    );
}

export default TotalInitialCaseStatusGraphElem;