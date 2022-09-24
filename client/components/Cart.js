import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user";

export class Cart extends React.Component {
  componentDidMount() {
    this.props.setUser(this.props.user.username);
  }
  render() {
    console.log(this);

    return <div>hello</div>;
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mapState, mapDispatchToProps)(Cart);
