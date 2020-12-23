import TotalInitialCaseStatusGraphElem from './total/casestatus/TotalInitialCaseStatusGraphElem';
import TotalRenewalCaseStatusGraphElem from './total/casestatus/TotalRenewalCaseStatusGraphElem';
import TotalInitialIntakeGraphElem from './total/intake/TotalInitialIntakeGraphElem'
import TotalRenewalIntakeGraphElem from './total/intake/TotalRenewalIntakeGraphElem'

function Performance() {
    return (
      <div>
        <TotalInitialCaseStatusGraphElem/>
        <TotalRenewalCaseStatusGraphElem/>
        <TotalInitialIntakeGraphElem/>
        <TotalRenewalIntakeGraphElem/>
      </div>
    );
  }
  
  export default Performance;