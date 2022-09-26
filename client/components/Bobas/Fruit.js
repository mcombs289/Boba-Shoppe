import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products";
import { Link } from "react-router-dom";

const Fruit = () => {
  const [isloading, setisLoading] = useState(true);

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  console.log("Fruit: ", products);

  useEffect(() => {
    setisLoading(false);
    dispatch(fetchProducts());
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };

  //   const Fruits = products.filter((boba) => boba.category === "Fruit");
  //   const filteredFruit = Fruits.filter((boba) => {
  //     return boba.name;
  //   });

  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5"></div>
        {filteredFruit.map((product) => {
          return (
            <div id="singleItem" key={product.id}>
              <div className="productDisplayCard">
                <Link to={`/products/${product.id}`}>
                  <img src={product.imageUrl} alt="image" />
                  <h2>{product.name}</h2>
                  <h3>{product.price}</h3>
                  <div className="likeArea">
                    <button className="add" onClick={this.addToCart}>
                      Add to Cart
                    </button>
                    <button className="like">
                      <span>♥</span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <h2 className="display-6 fw-bolder text-center">Fruit</h2>
        <hr />
        <div className="row justify-content-center">
          {isloading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Fruit;
