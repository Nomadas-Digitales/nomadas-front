import { Switch, Route, Redirect } from "react-router-dom";
import routes from "routes";

const App = () => {
  return (
    <div>
      <header>Nomadas Digitales. </header>
      <Switch>
        {routes.map((route, index) => (
          <Route {...route} key={index} />
        ))}
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default App;
