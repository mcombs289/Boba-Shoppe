import React from "react";
import { Link } from "react-router-dom";
import { Connect } from "react-redux";
import { connect } from "../../server/api/products";

export class SingleProduct extends React.Component {
  componentDidMount() {
    const productId = this.props.match.params.id;
  }

  render() {
    return (
      <div>
        <h1 id="title">Product Name</h1>
        <img />

        <div>
          <p>price: </p>
          <p>description: </p>
        </div>

        <Link to="/home">Back to Home</Link>
      </div>
    );
  }
}

export default connect(SingleProduct);
