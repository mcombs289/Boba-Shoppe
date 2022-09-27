import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../redux/singleProduct";
import { Link } from "react-router-dom";
import { me } from "../store/auth";
import EditProduct from "./EditProduct";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
    this.props.currentUserData();
  }

  render() {
    const { product } = this.props;
    const isAdmin = this.props.isAdmin;

    return isAdmin ? (
      <div className="container">
        <div className="card" key={product.id}>
          <h2 className="title">{product.name}</h2>
          <div className="img-card">
            <img className="img" src={product.imageUrl} />
          </div>
          <div className="info-card">
            <EditProduct />
            <Link to="/home">
              <button>Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="card" key={product.id}>
          <h2 className="title">{product.name}</h2>
          <div className="img-card">
            <img className="img" src={product.imageUrl} />
          </div>
          <div className="info-card">
            <p className="info">Price: ${(product.price / 100).toFixed(2)}</p>
            <p className="info">Left in Stock: {product.quantity}</p>
            <p className="info">Description: {product.description}</p>
            <button>Add to Cart</button>
            <div className="link">
              <Link to="/home">
                <button>Back to Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
  isAdmin: state.auth.adminAccess,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  currentUserData() {
    dispatch(me());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
