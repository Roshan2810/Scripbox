import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./container/UserManagement/Login";
import ViewChallenges from "./container/Challenges/ViewChallengeList";
import CreateChallenge from "./container/Challenges/CreateNewChallenge";

const RootRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/challenges/view-challenges"
          component={ViewChallenges}
        />
        <Route
          exact
          path="/challenges/new-challenge"
          component={CreateChallenge}
        />
      </Switch>
    </Router>
  );
};

export default RootRouter;
