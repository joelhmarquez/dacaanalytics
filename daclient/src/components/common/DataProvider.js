import rawData from '../../data/data.json';

const performanceKeyName = "performance"
const populationKeyName = "population"
const byAgeGroupKeyName = "byAgeGroup"
const byBirthCountryKeyName = "byBirthCountry"
const byStateKeyName = "byState"
const byMaritalStatusKeyName = "byMaritalStatus"
const bySexKeyName = "bySex"
const totalKeyName = "total"
const initialKeyName = "initial"
const renewalKeyName = "renewal"

export function GetPopulationByAgeGroupByYearData()
{
    let aboveThirtyKeyName = "aboveThirty"
    let aboveThirtyCategories = ["thirtyOneToThirtyFive", "thirtyOneToThirtySix", "thirtySixToThirtySeven", "thirtySixToThirtyNine"]
    let data = [];
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][populationKeyName] != null &&
            rawData.year[year][populationKeyName][byAgeGroupKeyName] != null)
        {
            let val = rawData.year[year][populationKeyName][byAgeGroupKeyName];
            val["year"] = year;

            for (var category of aboveThirtyCategories){
                if (category in val){
                    if (!(aboveThirtyKeyName in val)){
                        val[aboveThirtyKeyName] = val[category]
                    }
                    else{
                        val[aboveThirtyKeyName] += val[category]
                    }
                }
                delete val[category]
            }

            data.push(val)
        }
    }

    return data;
}

export function GetPopulationByBirthCountry(country)
{
    let data = [];
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][populationKeyName] != null &&
            rawData.year[year][populationKeyName][byBirthCountryKeyName] != null &&
            country in rawData.year[year][populationKeyName][byBirthCountryKeyName])
        {
            let val = {"year" : year};
            val[country] = rawData.year[year][populationKeyName][byBirthCountryKeyName][country];

            data.push(val)
        }
    }

    return data;
}

export function GetPopulationByMaritalStatusByYearData()
{
    return GetPopulationByYear(byMaritalStatusKeyName);
}

export function GetPopulationBySexByYearData()
{
    return GetPopulationByYear(bySexKeyName);
}

export function GetPopulationByState(state)
{
    let data = [];
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][populationKeyName] != null &&
            rawData.year[year][populationKeyName][byStateKeyName] != null &&
            state in rawData.year[year][populationKeyName][byStateKeyName])
        {
            let val = {"year" : year};
            val[state] = rawData.year[year][populationKeyName][byStateKeyName][state];

            data.push(val)
        }
    }

    return data;
}

export function GetPopulationByBirthCountryKeys()
{
    return GetPopulationKeys(byBirthCountryKeyName);
}

export function GetPopulationByStateKeys()
{
    return GetPopulationKeys(byStateKeyName);
}

function GetPopulationByYear(category)
{
    let data = [];
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][populationKeyName] != null &&
            rawData.year[year][populationKeyName][category] != null)
        {
            let val = rawData.year[year][populationKeyName][category];
            val["year"] = year;

            data.push(val)
        }
    }

    return data;
}

function GetPopulationKeys(category)
{
    let keys = new Set();
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][populationKeyName] != null &&
            rawData.year[year][populationKeyName][category] != null)
        {
            for (var val of Object.keys(rawData.year[year][populationKeyName][category]))
            {
                keys.add(val)
            }
        }
    }
    
    return Array.from(keys);
}

export function GetInitialPerformanceByYearData(category)
{
    let data = [];
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][performanceKeyName] != null &&
            rawData.year[year][performanceKeyName][totalKeyName] != null &&
            rawData.year[year][performanceKeyName][totalKeyName][initialKeyName] != null &&
            rawData.year[year][performanceKeyName][totalKeyName][initialKeyName][category] != null)
        {
            let val = rawData.year[year][performanceKeyName][totalKeyName][initialKeyName][category];
            val["year"] = year;

            data.push(val)
        }
    }

    return data;
}

export function GetRenewalPerformanceByYearData(category)
{
    let data = [];
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][performanceKeyName] != null &&
            rawData.year[year][performanceKeyName][totalKeyName] != null &&
            rawData.year[year][performanceKeyName][totalKeyName][renewalKeyName] != null &&
            rawData.year[year][performanceKeyName][totalKeyName][renewalKeyName][category] != null)
        {
            let val = rawData.year[year][performanceKeyName][totalKeyName][renewalKeyName][category];
            val["year"] = year;

            data.push(val)
        }
    }

    return data;
}