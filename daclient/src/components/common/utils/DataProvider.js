import rawData from '../../../data/data.json';
import * as Constants from './Constants'

// Population Data Provider

export function GetPopulationByAgeGroupByYearData()
{
    let aboveThirtyKeyName = "aboveThirty"
    let aboveThirtyCategories = ["thirtyOneToThirtyFive", "thirtyOneToThirtySix", "thirtySixToThirtySeven", "thirtySixToThirtyNine"]
    let data = [];
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][Constants.POPULATION_KEY] != null &&
            rawData.year[year][Constants.POPULATION_KEY][Constants.BY_AGE_GROUP_KEY] != null)
        {
            let val = rawData.year[year][Constants.POPULATION_KEY][Constants.BY_AGE_GROUP_KEY];
            val[Constants.YEAR_KEY] = year;

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
        if (rawData.year[year][Constants.POPULATION_KEY] != null &&
            rawData.year[year][Constants.POPULATION_KEY][Constants.BY_BIRTH_COUNTRY_KEY] != null &&
            country in rawData.year[year][Constants.POPULATION_KEY][Constants.BY_BIRTH_COUNTRY_KEY])
        {
            let val = {"year" : year};
            val[country] = rawData.year[year][Constants.POPULATION_KEY][Constants.BY_BIRTH_COUNTRY_KEY][country];

            data.push(val)
        }
    }

    return data;
}

export function GetPopulationByBirthCountryForYear(year)
{
    let data = [[Constants.GOOGLE_MAPS_COUNTRY_KEY, Constants.POPULATION_KEY]];

    if (rawData.year[year] != null &&
        rawData.year[year][Constants.POPULATION_KEY] != null &&
        rawData.year[year][Constants.POPULATION_KEY][Constants.BY_BIRTH_COUNTRY_KEY])
    {
        for (var country of Object.keys(rawData.year[year][Constants.POPULATION_KEY][Constants.BY_BIRTH_COUNTRY_KEY]))
        {
            data.push([country, rawData.year[year][Constants.POPULATION_KEY][Constants.BY_BIRTH_COUNTRY_KEY][country]])
        }
    }

    return data;
}

export function GetPopulationByBirthCountryKeys()
{
    return GetPopulationKeys(Constants.BY_BIRTH_COUNTRY_KEY);
}

export function GetPopulationByBirthCountryYearKeys()
{
    let keys = new Set();
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][Constants.POPULATION_KEY] != null &&
            rawData.year[year][Constants.POPULATION_KEY][Constants.BY_BIRTH_COUNTRY_KEY] != null)
        {
            keys.add(year)
        }
    }
    
    return Array.from(keys);
}

export function GetPopulationByMaritalStatusByYearData()
{
    return GetPopulationByYear(Constants.BY_MARITAL_STATUS_KEY);
}

export function GetPopulationBySexByYearData()
{
    return GetPopulationByYear(Constants.BY_SEX_KEY);
}

export function GetPopulationByState(state)
{
    let data = [];
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][Constants.POPULATION_KEY] != null &&
            rawData.year[year][Constants.POPULATION_KEY][Constants.BY_STATE_KEY] != null &&
            state in rawData.year[year][Constants.POPULATION_KEY][Constants.BY_STATE_KEY])
        {
            let val = {"year" : year};
            val[state] = rawData.year[year][Constants.POPULATION_KEY][Constants.BY_STATE_KEY][state];

            data.push(val)
        }
    }

    return data;
}

export function GetPopulationByStateForYear(year)
{
    let data = [[Constants.GOOGLE_MAPS_STATE_KEY, Constants.POPULATION_KEY]];

    if (rawData.year[year] != null &&
        rawData.year[year][Constants.POPULATION_KEY] != null &&
        rawData.year[year][Constants.POPULATION_KEY][Constants.BY_STATE_KEY])
    {
        for (var state of Object.keys(rawData.year[year][Constants.POPULATION_KEY][Constants.BY_STATE_KEY]))
        {
            data.push([state, rawData.year[year][Constants.POPULATION_KEY][Constants.BY_STATE_KEY][state]])
        }
    }

    return data;
}

export function GetPopulationByStateKeys()
{
    return GetPopulationKeys(Constants.BY_STATE_KEY);
}

export function GetPopulationByStateYearKeys()
{
    let keys = new Set();
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][Constants.POPULATION_KEY] != null &&
            rawData.year[year][Constants.POPULATION_KEY][Constants.BY_STATE_KEY] != null)
        {
            keys.add(year)
        }
    }
    
    return Array.from(keys);
}

// Performance Data Provider

export function GetInitialPerformanceByYearData(category)
{
    let data = [];
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][Constants.PERFORMANCE_KEY] != null &&
            rawData.year[year][Constants.PERFORMANCE_KEY][Constants.TOTAL_KEY] != null &&
            rawData.year[year][Constants.PERFORMANCE_KEY][Constants.TOTAL_KEY][Constants.INITIAL_KEY] != null &&
            rawData.year[year][Constants.PERFORMANCE_KEY][Constants.TOTAL_KEY][Constants.INITIAL_KEY][category] != null)
        {
            let val = rawData.year[year][Constants.PERFORMANCE_KEY][Constants.TOTAL_KEY][Constants.INITIAL_KEY][category];
            val[Constants.YEAR_KEY] = year;

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
        if (rawData.year[year][Constants.PERFORMANCE_KEY] != null &&
            rawData.year[year][Constants.PERFORMANCE_KEY][Constants.TOTAL_KEY] != null &&
            rawData.year[year][Constants.PERFORMANCE_KEY][Constants.TOTAL_KEY][Constants.RENEWAL_KEY] != null &&
            rawData.year[year][Constants.PERFORMANCE_KEY][Constants.TOTAL_KEY][Constants.RENEWAL_KEY][category] != null)
        {
            let val = rawData.year[year][Constants.PERFORMANCE_KEY][Constants.TOTAL_KEY][Constants.RENEWAL_KEY][category];
            val[Constants.YEAR_KEY] = year;

            data.push(val)
        }
    }

    return data;
}

// Helpers

function GetPopulationByYear(category)
{
    let data = [];
    for (var year of Object.keys(rawData.year))
    {
        if (rawData.year[year][Constants.POPULATION_KEY] != null &&
            rawData.year[year][Constants.POPULATION_KEY][category] != null)
        {
            let val = rawData.year[year][Constants.POPULATION_KEY][category];
            val[Constants.YEAR_KEY] = year;

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
        if (rawData.year[year][Constants.POPULATION_KEY] != null &&
            rawData.year[year][Constants.POPULATION_KEY][category] != null)
        {
            for (var val of Object.keys(rawData.year[year][Constants.POPULATION_KEY][category]))
            {
                keys.add(val)
            }
        }
    }
    
    return Array.from(keys);
}