import ChartElem from '../../../common/ChartElem'
import RenewalLineGraph from '../../RenewalLineGraph'

function GetGraphs()
{
    return(
        <div className="row">
            <RenewalLineGraph category="caseStatus"/>
        </div>);
}

function TotalRenewalCaseStatusGraphElem()
{
    return (
       <ChartElem title="Renewal DACA Application Case Status" type="area-chart" graphs={GetGraphs()}/>
    );
}

export default TotalRenewalCaseStatusGraphElem;