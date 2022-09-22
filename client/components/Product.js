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
      <div className="container">
        <div className="card" key={product.id}>
          <h2 className="title">{product.name}</h2>
          <div className="img-card">
            <img className="img" src={product.imageUrl} />
          </div>
          <div className="info-card">
            <p className="info">Price: {product.price}</p>
            <p className="info">Quantity: {product.quantity}</p>
            <p className="info">Description: {product.description}</p>
            <div className="link">
              <Link to="/home">Back to Home</Link>
            </div>
          </div>
        </div>
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
