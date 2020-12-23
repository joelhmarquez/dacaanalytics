import ChartElem from '../../common/ChartElem'
import SexBarGraph from './SexBarGraph'
import SexLineGraph from './SexLineGraph'

function GetGraphs()
{
    return(
        <div className="row">
            <div className="col-lg-6">
                <SexLineGraph/>
            </div>
            <div className="col-lg-6">
                <SexBarGraph/>
            </div>
        </div>);
}

function SexGraphElem()
{
    return (
       <ChartElem title="DACA Beneficiaries by Sex" type="area-chart" graphs={GetGraphs()}/>
    );
}

export default SexGraphElem;