import React, {useState} from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import Plan from './Plan';
import Plans from './Plans';
import Detail from './Detail';

const App: React.FC = () => {
  const match = useRouteMatch();
  const [plans, setPlans] = useState(
    [{name: "foo", id: "32"}, {name: "bar", id: "27"}] as Plan[]
  );

  return (
    <Switch>
      <Route path={match.url + "/plans/:planId"}>
        <Detail plans={plans} />
      </Route>
      <Route path={match.url + "/plans"}>
        <Plans plans={plans} />
      </Route>
      <Redirect to={match.url + "/plans"} />
    </Switch>
  );
};

export default App;
