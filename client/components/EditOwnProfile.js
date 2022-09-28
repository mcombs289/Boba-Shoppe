import React from "react";
import { connect } from "react-redux";
import { fetchEditedUser } from "../redux/user";
import { fetchOrdersByUser } from "../redux/orders";
import {
  deleteOrderProductThunk,
  getOrderProductThunk,
  updateOrderProductThunk,
} from "../redux/orderProducts";

export class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      email: this.props.user.email,
      imageUrl: this.props.user.imageUrl,
      username: this.props.user.username,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    console.log(this);
    evt.preventDefault();
    this.props.updateUser({ ...this.state });
    this.props.history.push("/profile");
    window.location.reload(false);
  }

  render() {
    const { handleChange, handleSubmit } = this;
    let { orders } = this.props || [];
    let products = orders?.products || [];
    let { user } = this.props;
    const { firstName, lastName, email, username } = this.state;
    console.log(this.state);
    return (
      <div className="cart">
        <h1>{user.firstName}'s Account information</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>User Name: </label>
            <input name="username" onChange={handleChange} value={username} />
          </div>
          <div>
            <label>First Name: </label>
            <input name="firstName" onChange={handleChange} value={firstName} />
          </div>
          <div>
            <label>Last Name: </label>
            <input name="lastName" onChange={handleChange} value={lastName} />
          </div>
          <div>
            <label>Email: </label>
            <input name="email" onChange={handleChange} value={email} />
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
    orders: state.orders,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (username) => dispatch(fetchEditedUser(username)),
    // deleteOrderProduct: (thunkInfo) =>
    //   dispatch(deleteOrderProductThunk(thunkInfo)),
    // getOrdersProduct: (order) => dispatch(getOrderProductThunk(order)),
    // updateOrdersProduct: (order) => dispatch(updateOrderProductThunk(order)),
  };
};

export default connect(mapState, mapDispatchToProps)(Profile);
