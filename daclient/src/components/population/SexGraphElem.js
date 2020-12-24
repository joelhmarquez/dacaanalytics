import ChartElem from '../common/ChartElem'
import LineGraph from '../common/LineGraph'
import * as Constants from '../common/utils/Constants';
import * as DataProvider from '../common/utils/DataProvider';
import * as Utils from '../common/utils/Utils'
import BarGraph from '../common/BarGraph';

function GetContent()
{
    let data = DataProvider.GetPopulationBySexByYearData();
    let lines = Utils.GetLinesFromData(data, Utils.WithUppercaseFirstLetter)
    let bars = Utils.GetBarsFromData(data, Utils.WithUppercaseFirstLetter)
    return(
        <div className="row">
            <div className="col-lg-6">
                <LineGraph aspect={Constants.DOUBLE_GRAPH_ASPECT} data={data} lines={lines}/>
            </div>
            <div className="col-lg-6">
                <BarGraph aspect={Constants.DOUBLE_GRAPH_ASPECT} data={data} bars={bars}/>
            </div>
        </div>);
}

function SexGraphElem()
{
    return (
       <ChartElem title="DACA Beneficiaries by Sex" content={GetContent()}/>
    );
}

export default SexGraphElem;