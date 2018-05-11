import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { AppLayout } from 'components/layout/app';

const HelloWorld = () => <h1>Hello World!</h1>

const App = () => (
  <Router>
    <AppLayout>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
      </Switch>
    </AppLayout>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById("body")
);
