import ChartElem from '../../common/ChartElem'
import AgeGroupBarGraph from './AgeGroupBarGraph'
import AgeGroupLineGraph from './AgeGroupLineGraph'

function GetGraphs()
{
    return(
        <div className="row">
            <div className="col-lg-6">
                <AgeGroupLineGraph/>
            </div>
            <div className="col-lg-6">
                <AgeGroupBarGraph/>
            </div>
        </div>);
}

function AgeGroupGraphElem()
{
    return (
       <ChartElem title="DACA Beneficiaries by Age Group" type="area-chart" graphs={GetGraphs()}/>
    );
}

export default AgeGroupGraphElem;