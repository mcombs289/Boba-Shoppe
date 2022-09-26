// import React from "react";
// import { Link } from "react-router-dom";

// const categories = ["Fruit", "Sweet", "Tea"];

// export class Category extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       category: "",
//     };
//   }
// //   filterItem = (curcat) => {
// //     const newItem = this.props.filter((newVal) => {
// //       return newVal.category === curcat;
// //     });
// //     this.setState({ newItem });
// //   };
//   render() {
//     const products = this.props.products || [];
//     console.log("Category: ", products);
//     return (
//       <div id="category" style={{ textAlign: "center" }}>
//         <section>
//           <div>
//             <h1>Category</h1>
//             <Link to="/products" style={{ margin: 0 }}>
//               <button type="button" style={{ margin: 10 }}>
//                 All
//               </button>
//             </Link>
//             {categories.map((category) => {
//               return (
//                 <Link
//                   to={`/products/category/${category}`}
//                   key={category}
//                   style={{ margin: 0 }}
//                 >
//                   <button type="button" style={{ margin: 10 }}>
//                     {category}
//                     {/* <FilterItem /> */}
//                   </button>
//                 </Link>
//               );
//             })}
//           </div>
//         </section>
//       </div>
//     );
//   }
// }
// // const mapState = (state) => {
// //   return {
// //     products: state.products,
// //   };
// // };
// export default Category;

import React from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="container py-5">
        <div className="category">
          <NavLink style={{ textDecoration: "none" }} to="/products">
            <button style={{ margin: 10 }}>All</button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/Fruit">
            <button style={{ margin: 10 }}>Fruit</button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/Sweet">
            <button style={{ margin: 10 }}>Sweet</button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/Tea">
            <button style={{ margin: 10 }}>Tea</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Category;
