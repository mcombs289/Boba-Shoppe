import React from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="container">
        <div className="category">
          <NavLink style={{ textDecoration: "none" }} to="/products">
            <button>All</button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/products/Fruit">
            <button>Fruit</button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/products/Sweet">
            <button>Sweet</button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/products/Tea">
            <button>Tea</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Category;
