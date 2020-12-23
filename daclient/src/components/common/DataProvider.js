import rawData from '../../data/data.json';

const populationKeyName = "population"
const byAgeGroupKeyName = "byAgeGroup"
const byBirthCountryKeyName = "byBirthCountry"
const byMaritalStatusKeyName = "byMaritalStatus"
const bySexKeyName = "bySex"

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

export function GetPopulationByBirthCountryKeys()
{
    let keys = new Set();
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][populationKeyName] != null &&
            rawData.year[year][populationKeyName][byBirthCountryKeyName] != null)
        {
            for (var country of Object.keys(rawData.year[year][populationKeyName][byBirthCountryKeyName]))
            {
                keys.add(country)
            }
        }
    }
    
    return Array.from(keys);
}

export function GetPopulationByMaritalStatusByYearData()
{
    return GetPopulationByYear(byMaritalStatusKeyName);
}

export function GetPopulationBySexByYearData()
{
    return GetPopulationByYear(bySexKeyName);
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