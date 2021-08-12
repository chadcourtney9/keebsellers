import './App.css';
import NavMain from "./components/navBar/navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import { HOME_PATH, SELLING_PATH, ISO_PATH, GROUPBUY_PATH, ORDERS_PATH, ACCOUNT_PATH, DISCOVER_path, POSTS_path } from "./views";
import { Switch, Route } from "react-router-dom";
import HomePage from './components/homePage/homePage';
import GroupBuys from './components/groupBuys/groupBuys';

function App() {

  return (
    <div>
      <Router>
        <Switch>

          <Route path={HOME_PATH} exact={true}>
            <NavMain />
            <HomePage />
          </Route>

          <Route path={GROUPBUY_PATH} exact={true}>
            {/* group buys */}
            <NavMain />
            <GroupBuys />
          </Route>

          <Route path={SELLING_PATH} exact={true}>
            {/* Selling goes here */}
            <NavMain />
          </Route>

          <Route path={ISO_PATH} exact={true}>
            {/* in search of goes here */}
            <NavMain />
          </Route>

          <Route path={POSTS_path} exact={true}>
            <NavMain />
          </Route>

          <Route path={DISCOVER_path} exact={true}>
            {/* discover path */}
            <NavMain />
          </Route>

          <Route path={ORDERS_PATH} exact={true}>
            {/* orders path */}
            <NavMain />
          </Route>

          <Route path={ACCOUNT_PATH} exact={true}>
            {/* Account path */}
            <NavMain />
          </Route>\


        </Switch>
      </Router>
    </div>
  );
}

export default App;
