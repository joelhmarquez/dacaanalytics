import TotalInitialCaseStatusGraphElem from './total/casestatus/TotalInitialCaseStatusGraphElem';
import TotalRenewalCaseStatusGraphElem from './total/casestatus/TotalRenewalCaseStatusGraphElem';
import TotalInitialIntakeGraphElem from './total/intake/TotalInitialIntakeGraphElem'
import TotalRenewalIntakeGraphElem from './total/intake/TotalRenewalIntakeGraphElem'

function Performance() {
    return (
      <div>
        <TotalInitialIntakeGraphElem/>
        <TotalInitialCaseStatusGraphElem/>
        <TotalRenewalIntakeGraphElem/>
        <TotalRenewalCaseStatusGraphElem/>
      </div>
    );
  }
  
  export default Performance;