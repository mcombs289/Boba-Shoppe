import React from "react";
import { connect } from "react-redux";
import { fetchEditedUser } from "../redux/user";
import { fetchOrdersByUser } from "../redux/orders";
import {
  deleteOrderProductThunk,
  getOrderProductThunk,
  updateOrderProductThunk,
} from "../redux/orderProducts";
import { Link } from "react-router-dom";

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
    this.props.getOrders(this.props.userId);
  }

  render() {
    console.log("this.props", this.props);
    const { handleChange, handleSubmit } = this;
    let { orders } = this.props || [];
    let products = orders?.products || [];
    let { user } = this.props;

    return (
      <div className="cart">
        <h1>{user.firstName}'s Account information</h1>

        <img src={user.imageUrl} alt="image" />
        <div>
          Name: {user.firstName} {user.lastName}
        </div>

        <div>Email: {user.email} </div>
        <Link to={"/editProfile/"}>
          <button> Edit User</button>
        </Link>
        <div className="Order-history">
          <h1>Order History</h1>

          {orders.map((order) => {
            let UTCdate = order.updatedAt;
            let products = order.products;
            return (
              <div>
                <hr />
                <div
                  key={order.id}
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div>
                    <h3>Date Ordered : {UTCdate.slice(0, -14)}</h3>
                    <h3>Order Number: {order.id}</h3>
                  </div>
                  <div>
                    {products.map((product) => {
                      return (
                        <img
                          key={product.id}
                          style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "100%",
                            margin: "1rem",
                          }}
                          src={product.imageUrl}
                          alt="image"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <hr />
        </div>
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
    getOrders: (userId) => dispatch(fetchOrdersByUser(userId)),
    // deleteOrderProduct: (thunkInfo) =>
    //   dispatch(deleteOrderProductThunk(thunkInfo)),
    // getOrdersProduct: (order) => dispatch(getOrderProductThunk(order)),
    // updateOrdersProduct: (order) => dispatch(updateOrderProductThunk(order)),
  };
};

export default connect(mapState, mapDispatchToProps)(Profile);
