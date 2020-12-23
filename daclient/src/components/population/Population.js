import AgeGroupGraphElem from './agegroup/AgeGroupGraphElem'
import CountryOfBirthGraphElem from './countryofbirth/CountryOfBirthGraphElem'
import MaritalStatusGraphElem from './maritalstatus/MartialStatusGraphElem'
import SexGraphElem from './sex/SexGraphElem'

function population() {
    return (
      <div>
        <AgeGroupGraphElem/>
        <SexGraphElem/>
        <MaritalStatusGraphElem/>
        <CountryOfBirthGraphElem/>
      </div>
    );
  }
  
  export default population;