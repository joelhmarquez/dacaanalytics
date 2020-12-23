import Footer from './components/common/Footer'
import Nav from './components/common/Nav'
import Population from './components/population/Population'

function App() {
  return (
    <div>
      <Nav />
      <div className="content-wrapper">
        <div className="container-fluid">
          <Population/>
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default App;