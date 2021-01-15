import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../redux/actions/authActions";

const SignedInLinks = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const initial = "hello"; //auth.name.split(" ")[0][0] + auth.name.split(" ")[1][0];
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <a onClick={() => dispatch(signOut())}>Logout</a>
        </li>

        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            {initial}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
