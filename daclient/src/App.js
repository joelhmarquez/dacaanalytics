import Footer from './components/common/Footer'
import Navigation from './components/common/Navigation'
import Performance from './components/population/Population'
import Population from './components/population/Population'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './components/common/Routes'

function App() {
  return (
    <div>
      <Navigation />
      <div className="content-wrapper">
        <div className="container-fluid">
        <Router>
          <Routes/>
        </Router>
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default App;