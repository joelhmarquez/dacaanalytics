import * as Constants from './utils/Constants'
import { Chart } from "react-google-charts";

function GeoMap(props)
{
    return (
        <Chart
            width={'100%'}
            height={Constants.GOOGLE_MAP_HEIGHT}
            chartType="GeoChart"
            data={props.data}
            mapsApiKey={Constants.GOOGLE_MAPS}
            rootProps={{ 'data-testid': '1' }}
            options={props.options}
            />
    );
}

export default GeoMap;