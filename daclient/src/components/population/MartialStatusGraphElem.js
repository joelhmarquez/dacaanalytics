import ChartElem from '../common/ChartElem'
import LineGraph from '../common/LineGraph'
import * as Constants from '../common/utils/Constants';
import * as DataProvider from '../common/utils/DataProvider';
import * as Utils from '../common/utils/Utils'

function GetGraphs()
{
    let data = DataProvider.GetPopulationByMaritalStatusByYearData();
    let lines = Utils.GetLinesFromData(data, Utils.WithUppercaseFirstLetter)
    return(
        <div className="row">
            <div className="col-lg-12">
                <LineGraph aspect={Constants.SINGLE_GRAPH_ASPECT} data={data} lines={lines}/>
            </div>
        </div>);
}

function AgeGroupGraphElem()
{
    return (
       <ChartElem title="DACA Beneficiaries by Marital Status" content={GetGraphs()}/>
    );
}

export default AgeGroupGraphElem;