
import './App.css';
import NavMain from "./components/navBar/navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import { HOME_PATH, SELLING_PATH, ISO_PATH, GROUPBUY_PATH, ORDERS_PATH, ACCOUNT_PATH, DISCOVER_path } from "../../views";
import { Switch, Route } from "react-router-dom";



function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route>
            {/* home page goes here */}
            <NavMain />
          </Route>

          <Route>
            {/* group buys */}
            <NavMain />
          </Route>

          <Route>
            {/* Selling goes here */}
            <NavMain />
          </Route>

          <Route>
            {/* in search of goes here */}
            <NavMain />
          </Route>

          <Route>
            {/* discover path */}
            <NavMain />
          </Route>

          <Route>
            {/* orders path */}
            <NavMain />
          </Route>

          <Route>
            {/* Account path */}
            <NavMain />
          </Route>\


        </Switch>
      </Router>
    </div>
  );
}

export default App;
