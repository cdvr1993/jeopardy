import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Reducers from 'reducers';
import { AppLayout } from 'components/layout/app';
import { GameDashboard } from 'components/pages/game';

const store = createStore(Reducers);

const App = () => (
  <Provider store={store}>
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path="/" component={GameDashboard} />
        </Switch>
      </AppLayout>
    </Router>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById("body")
);
