import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { me } from "../store/auth";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    <h1>Boba Shoppe</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/profile">User Profile</Link>
          {isAdmin ? <Link to="/users">Users</Link> : null}
          <Link to="/cart">Shopping Cart</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <input type="text" placeholder="Search for any boba"></input>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Shopping Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.adminAccess,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
    currentUserData() {
      dispatch(me());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
