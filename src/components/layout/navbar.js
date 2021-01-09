import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignedInLinks from "./signedInLinks";
import SignedOutLinks from "./signedOutLinks";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);

  console.log("navbar auth >>>>>", auth);
  // show links depending on user's login status
  const links = auth._id ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Project Tracker
        </Link>
        {links}
      </div>
    </nav>
  );
};

export default Navbar;
