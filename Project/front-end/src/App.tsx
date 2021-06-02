import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/loginPage/login";
import Signup from "./components/signupPage/signupForm";

function App() {
  return (
    <div className="body">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
