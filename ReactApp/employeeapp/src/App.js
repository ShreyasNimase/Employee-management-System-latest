import "./App.css";
import { Home } from "./Home";
import { Department } from "./Department";
import { Employee } from "./Employee";
import { Login } from "./Login";
import { Navigation } from "./Navigation";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <div>
            <Navigation />

            <Route path="/home" component={Home} />
            <Route path="/department" component={Department} />
            <Route path="/employee" component={Employee} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
