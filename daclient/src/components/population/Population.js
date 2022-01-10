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
        <div className="alert alert-warning" role="alert">
          Note: Population counts of less than 10 people are redacted in USCIS reports to protect individual identities. They are represented as zero in all visualizations on this site.
        </div>
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