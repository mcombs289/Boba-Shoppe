import React from "react";
import { connect } from "react-redux";
import { fetchOrdersByUser } from "../redux/orders";

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getOrders(this.props.user.id);
  }
  render() {
    let { orders } = this.props || [];
    let products = orders.products || [];
    console.log(products);
    return (
      <div className="cart">
        <h1>Shopping Bag</h1>
        <hr />
        <div className="cartInfo">
          <div className="productsInCart">
            {products
              ? products.map((product) => {
                  return (
                    <div key={product.id}>
                      <div className="product">
                        <img src={product.imageUrl} alt="image" />
                        <div className="productInfo">
                          <h2> {product.name}</h2>
                        </div>
                        <div className="price">
                          <h3>Item Price: {product.price}</h3>
                        </div>
                        <select name="quantity" className="quantSelector">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                        <div className="price">
                          <h3>Total Price: {product.price}</h3>
                        </div>
                      </div>

                      <hr />
                    </div>
                  );
                })
              : null}
          </div>
          <div className="orderSummary">
            <h2>Order Summmary</h2>
            <h3>TOTAL</h3>
            <button className="checkout">Proceed To Checkout</button>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

const mapState = (state) => {
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
