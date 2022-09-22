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
    console.log(products);
    return (
      <div id="allItems">
        <div className="itemContainer">
          {products.length
            ? products.map((product) => {
                return (
                  <div id="singleItem" key={product.id}>
                    <div className="productDisplayCard">
                      <Link to={`/products/${product.id}`}>
                        <img src={product.imageUrl} alt="image" />
                        <h2>{product.name}</h2>
                        <h3>{product.price}</h3>
                        <div className="likeArea">
                          <button class="add">Add to Cart</button>
                          <button class="like">
                            <span>♥</span>
                          </button>
                        </div>
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
