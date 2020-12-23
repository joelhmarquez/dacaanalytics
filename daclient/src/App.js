import AgeGroupGraphElem from './components/population/agegroup/AgeGroupGraphElem'
import Footer from './components/common/Footer'
import Nav from './components/common/Nav'
import MaritalStatusGraphElem from './components/population/maritalstatus/MartialStatusGraphElem'
import SexGraphElem from './components/population/sex/SexGraphElem'

function App() {
  return (
    <div>
      <Nav />
      <div className="content-wrapper">
        <div className="container-fluid">
          <SexGraphElem/>
          <AgeGroupGraphElem/>
          <MaritalStatusGraphElem/>
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default App;