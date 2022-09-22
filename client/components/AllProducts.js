import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/products";
import { me } from "../store/auth";

export class AllProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.currentUserData();
  }

  render() {
    const products = this.props.products || [];
    const isAdmin = this.props.isAdmin;

    return isAdmin ? (
      <div id="allItems">
        <h2>Hello</h2>
        <div>
          {products.length
            ? products.map((product) => {
                return (
                  <div id="singleItem" key={product.id}>
                    <div>
                      <Link to={`/products/${product.id}`}>
                        <h2>{product.name}</h2>
                        <button>Edit</button>
                        <button>Delete</button>
                      </Link>
                    </div>
                    {/* <img style={{ width: "8rem" }} src={product.imageUrl} /> */}
                  </div>
                );
              })
            : null}
        </div>
      </div>
    ) : (
      <div id="allItems">
        <h2>Hello!</h2>
        <div>
          {products.length
            ? products.map((product) => {
                return (
                  <div id="singleItem" key={product.id}>
                    <div>
                      <Link to={`/products/${product.id}`}>
                        <h2>{product.name}</h2>
                      </Link>
                    </div>
                    {/* <img style={{ width: "8rem" }} src={product.imageUrl} /> */}
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
    products: state.products,
    isAdmin: state.auth.adminAccess,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
  currentUserData() {
    dispatch(me());
  },
});

export default connect(mapState, mapDispatchToProps)(AllProducts);
