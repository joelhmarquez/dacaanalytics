import AgeGroupGraphElem from './AgeGroupGraphElem'
import CountryOfBirthGraphElem from './CountryOfBirthGraphElem'
import CountryOfBirthGeoElem from './CountryOfBirthGeoElem'
import MaritalStatusGraphElem from './MartialStatusGraphElem'
import SexGraphElem from './SexGraphElem'
import StateGraphElem from './StateGraphElem'
import StateGeoElem from './StateGeoElem'

function Population() {
    return (
      <div>
        <CountryOfBirthGeoElem/>
        <StateGeoElem/>
        <AgeGroupGraphElem/>
        <SexGraphElem/>
        <MaritalStatusGraphElem/>
        <CountryOfBirthGraphElem/>
        <StateGraphElem/>
      </div>
    );
  }
  
  export default Population;