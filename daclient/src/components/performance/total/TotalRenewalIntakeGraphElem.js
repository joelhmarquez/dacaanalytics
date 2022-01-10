import ChartElem from '../../common/ChartElem'
import LineGraph from '../../common/LineGraph'
import * as Constants from '../../common/utils/Constants';
import * as DataProvider from '../../common/utils/DataProvider';
import * as Utils from '../../common/utils/Utils'

function GetContent()
{
    let data = DataProvider.GetRenewalPerformanceByYearData(Constants.INTAKE_KEY);
    let lines = Utils.GetLinesFromData(data, Utils.WithUppercaseFirstLetter)
    return(<LineGraph aspect={Constants.SINGLE_GRAPH_ASPECT} height={Constants.GRAPH_HEIGHT} data={data} lines={lines}/>);
}

function TotalRenewalIntakeGraphElem()
{
    return (
       <ChartElem title="Renewal DACA Application Intake" content={GetContent()}/>
    );
}

export default TotalRenewalIntakeGraphElem;