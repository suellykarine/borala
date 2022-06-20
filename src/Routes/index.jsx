import { Switch, Route } from "react-router-dom";
import Events from "../Pages/NewEvent";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import About from "../Pages/About";
import MyEvents from "../Pages/MyEvents";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/newEvent">
        <Events />
      </Route>
      <Route exact path="/myEvents">
        <MyEvents />
      </Route>
      <Route exact path="/editEvent">
        <Events isEditting />
      </Route>
    </Switch>
  );
};

export default Routes;
