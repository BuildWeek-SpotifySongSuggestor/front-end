import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTrackById, addTrackById } from "../store/actions";

const TrackSingle = ({ fetchTrackById, track, isLoading, addTrackById }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchTrackById(id);
  }, [fetchTrackById, id]);

  const handleAddFavorite = (e) => {
    e.preventDefault();
    addTrackById(id, 2);
  };

  if (isLoading) return "Loading . . .";
  return (
    <>
      {track.name !== "Undefined" ? (
        <p>{track.name}</p>
      ) : (
        track.album.artists.map((artist) => <p>{artist.name}</p>)
      )}
      {track.preview_url ? (
        <video controls>
          <source src={track.preview_url} />
        </video>
      ) : null}
      <button onClick={handleAddFavorite}>Add To Favorites</button>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    track: state.track,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchTrackById, addTrackById })(
  TrackSingle
);
