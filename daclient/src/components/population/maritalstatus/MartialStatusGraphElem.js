import ChartElem from '../../common/ChartElem'
import MaritalStatusBarGraph from './MaritalStatusBarGraph'
import MaritalStatusLineGraph from './MaritalStatusLineGraph'

function GetGraphs()
{
    return(
        <div className="row">
            <div className="col-lg-6">
                <MaritalStatusLineGraph/>
            </div>
            <div className="col-lg-6">
                <MaritalStatusBarGraph/>
            </div>
        </div>);
}

function AgeGroupGraphElem()
{
    return (
       <ChartElem title="DACA Beneficiaries by Marital Status" type="area-chart" graphs={GetGraphs()}/>
    );
}

export default AgeGroupGraphElem;