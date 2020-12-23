import { Navbar,Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import {withRouter} from 'react-router';

function Navigation()
{
    return (
        <Navbar bg="light" expand="lg" className="fixed-top">
        <Navbar.Brand href="#page-top">DACA Analytics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/population" >Population Data</Nav.Link>
            <Nav.Link as={Link} to="/performance" >Performance Data</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default withRouter(Navigation);