import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../redux/users";

export class AllUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const users = this.props.users || [];

    return (
      <div id="allUsers">
        <h2>All Users:</h2>
        <div>
          {users.length
            ? users.map((user) => {
                return (
                  <div id="singleUser" key={user.id}>
                    <div>
                      <Link to={`/users/${user.id}`}>
                        <h2>{user.name}</h2>
                      </Link>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(fetchUsers()),
});

export default connect(mapState, mapDispatchToProps)(AllUsers);
