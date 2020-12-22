import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Demo/Home";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import { Container } from "semantic-ui-react";
import FetchUser from './components/FetchUser';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
