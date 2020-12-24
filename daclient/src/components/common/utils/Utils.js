import * as Constants from './Constants'
import { Bar, Line } from 'recharts';

export function GetAgeGroupName(dataKey)
{
    switch(dataKey){
        case "underSixteen":
            return "Under 16"
        case "sixteenToTwenty":
            return "16-20"
        case "twentOneToTwentyFive":
            return "20-25"
        case "twentySixToThrity":
            return "26-30"
        case "thirtyOneToThirtyFive":
            return "31-35"
        case "thirtyOneToThirtySix":
            return "31-36"
        case "thirtySixToThirtySeven":
            return "36-37"
        case "thirtySixToThirtyNine":
            return "37-39"
        case "aboveThirty":
            return "Over 30"
        default:
            return "Unknown"
    };
}

export function GetBarsFromData(data, keyFunc = null)
{
    let count = 0;
    let barsDict = {};

    data.forEach(function(dict){
        for (var key of Object.keys(dict)){
            if (key !== "year" && !(key in barsDict)){
                barsDict[key] = <Bar name={(keyFunc != null ? keyFunc(key) : key)} dataKey={key} fill={Constants.GRAPH_COLOR[count]} key={count} />
                count += 1
            }
        }
    });

    return Object.values(barsDict);
}

export function GetCountryGeoMapOptions()
{
    return {
        datalessRegionColor: Constants.GOOGLE_DATALESS_REGION_COLOR,
        colorAxis: { colors: Constants.GOOGLE_COLOR_AXIS },
        backgroundColor: Constants.GOOGLE_BACKGROUND_COLOR,
    }    
}

export function GetStateGeoMapOptions()
{
    return {
        region: Constants.GOOGLE_REGION_US,
        resolution: Constants.GOOGLE_RESOLUTION_PROVINCES,
        datalessRegionColor: Constants.GOOGLE_DATALESS_REGION_COLOR,
        colorAxis: { colors: Constants.GOOGLE_COLOR_AXIS },
        backgroundColor: Constants.GOOGLE_BACKGROUND_COLOR,
    }    
}

export function GetLinesFromData(data, keyFunc = null)
{
    let count = 0;
    let linesDict = {};

    data.forEach(function(dict){
        for (var key of Object.keys(dict)){
            if (key !== "year" && !(key in linesDict)){
                linesDict[key] = <Line type="monotone" name={(keyFunc != null ? keyFunc(key) : key)} dataKey={key} stroke={Constants.GRAPH_COLOR[count]} activeDot={{ r: 4 }} key={count} />
                count += 1
            }
        }
    });

    return Object.values(linesDict);
}

export function WithUppercaseFirstLetter(text)
{
    return text.charAt(0).toUpperCase() + text.slice(1);
}