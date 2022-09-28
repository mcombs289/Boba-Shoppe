import React from "react";
import { connect } from "react-redux";
import { fetchEditedUser, fetchUser } from "../redux/user";

export class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      imageUrl: this.props.user.imageUrl,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   console.log("EDIT STUDENT: ", this.props);
  //   //const username = this.props.match.params.username;
  //   // const username = this.props.match.params.username;
  //   // this.props.setUser(username);
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editUser({ ...this.props.user, ...this.state });
    window.location.reload(false);
  }

  render() {
    const { firstName, lastName, email, username } = this.state;
    const { handleChange, handleSubmit } = this;
    let currentUser = this.props.user[0] || {};
    console.log(currentUser.firstName);
    return (
      <div className="editUserPage">
        <h2>Edit {currentUser.firstName}'s account information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName"> First Name: </label>
            <input
              name="firstName"
              onChange={handleChange}
              value={firstName}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName"> Last Name: </label>
            <input
              name="lastName"
              onChange={handleChange}
              value={lastName}
              required
            />
          </div>
          <div>
            <label htmlFor="email"> Email: </label>
            <input
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
          </div>
          <div>
            <label htmlFor="username"> Username: </label>
            <input
              name="username"
              onChange={handleChange}
              value={username}
              required
            />
          </div>
          <div>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    editUser: (user) => dispatch(fetchEditedUser(user, history)),
    setUser: (username) => dispatch(fetchUser(username)),
  };
};

export default connect(mapState, mapDispatch)(EditUser);
