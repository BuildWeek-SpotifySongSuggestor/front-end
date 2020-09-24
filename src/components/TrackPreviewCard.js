import React from "react";
import { Link } from "react-router-dom";

const TrackPreviewCard = (props) => {
  return (
    <>
      <Link to={`/track/${props.id}`}>
        {props.item.name !== "Undefined" ? (
          <p>{props.item.name}</p>
        ) : (
          props.item.album.artists.map((artist) => <p>{artist.name}</p>)
        )}
        {props.item.preview_url ? (
          <video controls>
            <source src={props.item.preview_url} />
          </video>
        ) : null}
      </Link>
    </>
  );
};

export default TrackPreviewCard;
