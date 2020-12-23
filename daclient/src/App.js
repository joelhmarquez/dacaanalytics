import Footer from './components/common/Footer'
import { BrowserRouter  as Router } from "react-router-dom";
import Routes from './components/common/Routes'

function App() {
  return (
    <div>
      <Router>
        <div className="content-wrapper">
          <div className="container-fluid">
            <Routes/>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;