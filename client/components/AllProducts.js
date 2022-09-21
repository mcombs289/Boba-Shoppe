import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/products";

export class AllProducts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const products = this.props.products || [];

    return (
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatchToProps)(AllProducts);
