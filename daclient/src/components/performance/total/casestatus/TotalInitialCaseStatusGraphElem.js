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
       <ChartElem title="DACA Initial Application Case Status" type="area-chart" graphs={GetGraphs()}/>
    );
}

export default TotalInitialCaseStatusGraphElem;