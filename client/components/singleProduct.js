import React from "react";
import { Link } from "react-router-dom";

export class singleProduct extends React.Component {
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
