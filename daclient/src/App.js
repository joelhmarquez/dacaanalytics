import Footer from './components/common/Footer'
import Routes from './components/common/Routes'

function App() {
  return (
    <div>
      <div className="content-wrapper">
        <div className="container-fluid">
          <Routes/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;