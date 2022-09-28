import React from "react";
import { connect } from "react-redux";
import AllProducts from "./AllProducts";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;
  console.log(this);
  console.log(props);

  return (
    <div>
      <AllProducts match={props.match} />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
