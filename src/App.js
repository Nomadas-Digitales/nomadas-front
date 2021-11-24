import { Switch, Route, Redirect } from "react-router-dom";
import routes from "routes";
import ScrollToTop from "hooks/useScrollTotop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
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
