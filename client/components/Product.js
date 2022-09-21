import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../redux/singleProduct";
import { Link } from "react-router-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Price: {product.price}</p>
          <img style={{ width: "8rem" }} src={product.imageUrl} />
        </div>
        <Link to="/home">Back to Home</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ product }) => ({
  product,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
