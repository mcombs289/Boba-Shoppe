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
    evt.preventDefault();
    this.props.updateUser({ ...this.state });
  }

  componentDidMount() {
    console.log(this.props);
    // this.props.getOrders(this.props.user.id);
  }

  render() {
    const { handleChange, handleSubmit } = this;
    let { orders } = this.props || [];
    let products = orders?.products || [];
    let { user } = this.props;

    console.log("state", this.state);
    console.log("render", this);
    return (
      <div className="cart">
        <h1>{user.firstName}'s Account information</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name: </label>
            <input
              name="firstName"
              onChange={handleChange}
              value={user.firstName}
            />
          </div>
          <div>
            <label>Last Name: </label>
            <input
              name="lastName"
              onChange={handleChange}
              value={user.lastName}
            />
          </div>
          <div>
            <label>Email: </label>
            <input name="email" onChange={handleChange} value={user.email} />
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
  console.log("state", state);
  return {
    user: state.auth,
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (username) => dispatch(fetchEditedUser(username)),
    // getOrders: (userId) => dispatch(fetchOrdersByUser(userId)),
    // deleteOrderProduct: (thunkInfo) =>
    //   dispatch(deleteOrderProductThunk(thunkInfo)),
    // getOrdersProduct: (order) => dispatch(getOrderProductThunk(order)),
    // updateOrdersProduct: (order) => dispatch(updateOrderProductThunk(order)),
  };
};

export default connect(mapState, mapDispatchToProps)(Profile);
