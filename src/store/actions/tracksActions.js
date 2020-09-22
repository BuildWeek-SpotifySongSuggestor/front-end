import { axiosWithAuth } from "../../utils";

export const FETCH_TRACKS_START = "FETCH_TRACKS";
export const FETCH_TRACKS_SUCCESS = "FETCH_TRACKS_SUCCESS";
export const FETCH_TRACKS_ERROR = "FETCH_TRACKS_ERROR";
export const ADD_TRACK = "ADD_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

export const fetchTracks = () => (dispatch) => {
  dispatch({ type: FETCH_TRACKS_START });
  axiosWithAuth()
    .get("api/tracks/:search")
    .then((res) => {
      console.log(res);
    })
    .catch((res) => {
      console.log(res);
    });
};
