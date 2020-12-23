import rawData from '../../data/data.json';

const populationKeyName = "population"
const byAgeGroupKeyName = "byAgeGroup"
const byMaritalStatusKeyName = "byMaritalStatus"
const bySexKeyName = "bySex"

export function GetAgeGroupByYearData()
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

export function GetMaritalStatusByYearData()
{
    let data = [];
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][populationKeyName] != null &&
            rawData.year[year][populationKeyName][byMaritalStatusKeyName] != null)
        {
            let val = rawData.year[year][populationKeyName][byMaritalStatusKeyName];
            val["year"] = year;
            data.push(val)
        }
    }

    return data;
}

export function GetSexByYearData()
{
    let data = [];
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][populationKeyName] != null &&
            rawData.year[year][populationKeyName][bySexKeyName] != null)
        {
            let val = rawData.year[year][populationKeyName][bySexKeyName];
            val["year"] = year;

            data.push(val)
        }
    }

    return data;
}