import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchTracks } from "../store/actions";
import TrackPreviewCard from "./TrackPreviewCard";

const ProfilePage = ({ fetchTracks, results, error, isLoading }) => {
  useEffect(() => {
    fetchTracks();
  }, [fetchTracks]);

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTracks(search);
  };

  if (isLoading) return <p>Loading . . .</p>;

  console.log(results.tracks);
  return (
    <>
      <h1>Profile</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {results.tracks &&
        results.tracks.items.map((item) => (
          <TrackPreviewCard key={item.id} id={item.id} item={item} />
        ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchTracks })(ProfilePage);
