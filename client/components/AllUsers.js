import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../redux/users";
import { me } from "../store/auth";

export class AllUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
    this.props.currentUserData();
  }

  // handleClick() {
  //   this.setState();
  // }

  render() {
    const users = this.props.users || [];
    const isAdmin = this.props.isAdmin;
    return isAdmin ? (
      <div id="allUsers">
        <h2>All Users:</h2>
        <div>
          {users.map((user) => {
            return (
              <div id="singleUser" key={user.id}>
                <div>
                  <Link to={`/users/${user.id}`}>
                    <h2>{user.username}</h2>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      "Access Forbidden"
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users,
    isAdmin: state.auth.adminAccess,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(fetchUsers()),
  currentUserData() {
    dispatch(me());
  },
});

export default connect(mapState, mapDispatchToProps)(AllUsers);
