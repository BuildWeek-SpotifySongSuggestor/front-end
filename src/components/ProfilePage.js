import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchTracks } from "../store/actions/tracksActions";

const ProfilePage = ({ fetchTracks, results, error, isLoading }) => {
  useEffect(() => {
    fetchTracks();
  }, [fetchTracks]);

  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTracks(search);
  };

  if (isLoading) return <p>Loading . . .</p>;

  return (
    <>
      <h1>Profile</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='searchName'
          onchange={handleInput}
          value={search}
        />
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    results: state.results,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchTracks })(ProfilePage);
