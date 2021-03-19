import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Header/Header';
import Rent from './components/Rent/Rent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/rent">
            <Rent></Rent>
          </Route>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
