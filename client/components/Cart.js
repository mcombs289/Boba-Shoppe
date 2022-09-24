import React from "react";
import { connect } from "react-redux";
import { fetchOrdersByUser } from "../redux/orders";

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getOrders(this.props.user.id);
  }
  render() {
    let { orders } = this.props;

    return (
      <div>
        {orders.length
          ? orders.map((order) => {
              return (
                <div key={order.id}>
                  <h3>{order.id}</h3>
                </div>
              );
            })
          : null}
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
    getOrders: (userId) => dispatch(fetchOrdersByUser(userId)),
  };
};

export default connect(mapState, mapDispatchToProps)(Cart);
