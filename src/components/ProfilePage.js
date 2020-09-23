import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTracks } from "../store/actions/tracksActions";

const ProfilePage = ({ fetchTracks }) => {
  useEffect(() => {
    fetchTracks();
  }, [fetchTracks]);

  return (
    <>
      <h1>Profile</h1>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    tracks: state.tracks,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchTracks })(ProfilePage);
