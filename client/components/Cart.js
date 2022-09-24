import React from "react";
import { connect } from "react-redux";
import { fetchUserById } from "../redux/user";

export class Cart extends React.Component {
  componentDidMount() {
    this.props.setUser(this.props.user.id);
  }
  render() {
    console.log(this.props.user);

    return <div>hello</div>;
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (id) => dispatch(fetchUserById(id)),
});

export default connect(mapState, mapDispatchToProps)(Cart);
