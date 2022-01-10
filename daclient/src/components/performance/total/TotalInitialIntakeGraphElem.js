import ChartElem from '../../common/ChartElem'
import LineGraph from '../../common/LineGraph'
import * as Constants from '../../common/utils/Constants';
import * as DataProvider from '../../common/utils/DataProvider';
import * as Utils from '../../common/utils/Utils'

function GetContent()
{
    let data = DataProvider.GetInitialPerformanceByYearData(Constants.INTAKE_KEY);
    let lines = Utils.GetLinesFromData(data, Utils.WithUppercaseFirstLetter)
    return(<LineGraph aspect={Constants.SINGLE_GRAPH_ASPECT} height={Constants.GRAPH_HEIGHT} data={data} lines={lines}/>);
}

function TotalInitialIntakeGraphElem()
{
    return (
       <ChartElem title="Initial DACA Application Intake" type="area-chart" content={GetContent()}/>
    );
}

export default TotalInitialIntakeGraphElem;