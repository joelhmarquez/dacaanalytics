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