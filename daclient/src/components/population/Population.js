import AgeGroupGraphElem from './AgeGroupGraphElem'
import CountryOfBirthGraphElem from './CountryOfBirthGraphElem'
import MaritalStatusGraphElem from './MartialStatusGraphElem'
import SexGraphElem from './SexGraphElem'
import StateGraphElem from './StateGraphElem'

function Population() {
    return (
      <div>
        <AgeGroupGraphElem/>
        <SexGraphElem/>
        <MaritalStatusGraphElem/>
        <CountryOfBirthGraphElem/>
        <StateGraphElem/>
      </div>
    );
  }
  
  export default Population;