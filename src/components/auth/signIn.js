import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/actions/authActions";

const SignIn = ({ history }) => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.id]: e.target.value });
    //this.setState({
    // [e.target.id]: e.target.value,
    //});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(authData));
    // back to home page
    history.push("/");
    //console.log("Signin >>>>>", this.state);
    //this.props.signIn(this.state);
  };

  //const { authError, auth } = this.props;
  //if (auth.uid) return <Redirect to="/" />;
  const authError = undefined;
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
          <div className="center red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
