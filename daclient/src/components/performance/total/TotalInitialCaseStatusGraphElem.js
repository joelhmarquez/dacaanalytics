import ChartElem from '../../common/ChartElem'
import LineGraph from '../../common/LineGraph'
import * as Constants from '../../common/utils/Constants';
import * as DataProvider from '../../common/utils/DataProvider';
import * as Utils from '../../common/utils/Utils'

function GetContent()
{
    let data = DataProvider.GetInitialPerformanceByYearData(Constants.CASE_STATUS_KEY);
    let lines = Utils.GetLinesFromData(data, Utils.WithUppercaseFirstLetter)
    return(<LineGraph aspect={Constants.SINGLE_GRAPH_ASPECT} data={data} lines={lines}/>);
}

function TotalInitialCaseStatusGraphElem()
{
    return (
       <ChartElem title="Initial DACA Application Case Status" content={GetContent()}/>
    );
}

export default TotalInitialCaseStatusGraphElem;