import React from "react";
import { connect } from "react-redux";
import { fetchTracks } from "../store/actions/tracksActions";

const ProfilePage = () => {
  return (
    <>
      <h1>Profile</h1>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state,
  };
};

export default connect(mapStateToProps, { fetchTracks })(ProfilePage);
