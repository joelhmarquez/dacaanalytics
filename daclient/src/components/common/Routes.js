import About from '../common/About'
import Performance from '../performance/Performance'
import Population from '../population/Population'
import { Navbar,Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

function Routes() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar bg="light" expand="lg" className="fixed-top">
            <Navbar.Brand as={Link} to="/">DACA Analytics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/population" >Population Data</Nav.Link>
                <Nav.Link as={Link} to="/performance" >Performance Data</Nav.Link>
                <Nav.Link as={Link} to="/about" >About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/population" component={Population} />
            <Route exact path="/">
              <Redirect to="/population" />
            </Route>
            <Route exact path="/performance" component={Performance} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    );
  };

export default Routes;