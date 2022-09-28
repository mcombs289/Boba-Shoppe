import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user";
import EditUser from "./EditUser";

export class AdminProfileView extends React.Component {
  componentDidMount() {
    const username = this.props.match.params.username;
    this.props.setUser(username);
  }

  render() {
    const user = this.props.user[0] || {};
    return (
      <div>
        <h1>{user.firstName}'s Account</h1>
        <div className="profileContainer">
          <div className="rightDiv">
            <div>
              <h1>Account Information</h1>
              <h3>
                name: {user.firstName} {user.lastName}
              </h3>
              <h3>Email: {user.email}</h3>
              <h3>username: {user.username}</h3>
              <img
                style={{ height: "100px", width: "100px" }}
                src={user.imageUrl}
                alt="image"
              />
            </div>
            <div className="leftDiv">
              <EditUser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(mapState, mapDispatchToProps)(AdminProfileView);
