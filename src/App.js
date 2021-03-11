import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import LeagueDetail from './Components/LeagueDetial/LeagueDetail';

function App() {

  return (
    <Router>
        <Switch>
        <Route path="/home">
                <Home />
            </Route>

            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/league/:id">
                <LeagueDetail/>
            </Route>

            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
