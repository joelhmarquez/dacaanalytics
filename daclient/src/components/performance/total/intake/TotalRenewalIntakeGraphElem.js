import ChartElem from '../../../common/ChartElem'
import RenewalLineGraph from '../../RenewalLineGraph'

function GetGraphs()
{
    return(
        <div className="row">
            <RenewalLineGraph category="intake"/>
        </div>);
}

function TotalRenewalIntakeGraphElem()
{
    return (
       <ChartElem title="DACA Renewal Application Intake" type="area-chart" graphs={GetGraphs()}/>
    );
}

export default TotalRenewalIntakeGraphElem;