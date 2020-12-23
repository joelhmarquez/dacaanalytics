import Navigation from './Navigation'
import Performance from '../performance/Performance'
import Population from '../population/Population'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function Routes() {
    return (
      <div>
        <Navigation />
        <Router>
            <Switch>
              <Route exact path="/Population" component={Population} />
              <Route exact path="/">
                <Redirect to="/Population" />
              </Route>
              <Route exact path="/Performance" component={Performance} />
            </Switch>
          </Router>
      </div>
    );
  };

export default Routes;