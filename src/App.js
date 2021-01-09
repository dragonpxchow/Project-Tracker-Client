import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loadUser } from "./redux/actions/authActions";
import Navbar from "./components/layout/navbar";
import Home from "./components/pages/home";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import "./styles/app.css";

const App = () => {
  //const {userData, setUserData} = useState({token:undefined, user:undefined});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  /*
  componentDidMount() {
    store.dispatch(loadUser())
  }
  */
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
