import Footer from './components/common/Footer'
import Routes from './components/common/Routes'
import { BrowserRouter  as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="content-wrapper">
        <div className="container-fluid">
          <Routes/>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;