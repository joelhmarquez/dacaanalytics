import TotalInitialCaseStatusGraphElem from './total/TotalInitialCaseStatusGraphElem';
import TotalRenewalCaseStatusGraphElem from './total/TotalRenewalCaseStatusGraphElem';
import TotalInitialIntakeGraphElem from './total/TotalInitialIntakeGraphElem'
import TotalRenewalIntakeGraphElem from './total/TotalRenewalIntakeGraphElem'

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