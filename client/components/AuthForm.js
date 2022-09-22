import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";

/**
 * COMPONENT
 */
const LogIn = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="authPage">
      <form onSubmit={handleSubmit} name={name}>
        <h1>LOG IN</h1>
        <div>
          <input name="username" placeholder="User name" type="text" />
        </div>
        <div>
          <input name="password" placeholder="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

const SignUp = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="authPage">
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <input name="username" placeholder="username" type="text" />
        </div>
        <div>
          <input name="password" placeholder="password" type="password" />
        </div>
        <div>
          <input name="firstname" placeholder="First Name" type="text" />
        </div>
        <div>
          <input name="lastname" placeholder="Last Name" type="text" />
        </div>
        <div>
          <input name="email" placeholder="email" type="email" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(LogIn);
export const Signup = connect(mapSignup, mapDispatch)(SignUp);
