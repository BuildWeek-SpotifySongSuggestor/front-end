import React from "react";

const TrackPreviewCard = (props) => {
  console.log(props);
  return (
    <>
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
    </>
  );
};

export default TrackPreviewCard;
