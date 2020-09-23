import { axiosWithAuth } from "../../utils";

export const FETCH_TRACKS_START = "FETCH_TRACKS_START";
export const FETCH_TRACKS_SUCCESS = "FETCH_TRACKS_SUCCESS";
export const FETCH_TRACKS_ERROR = "FETCH_TRACKS_ERROR";
export const ADD_TRACK = "ADD_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

export const fetchTracks = (search) => {
  return (dispatch) => {
    dispatch({ type: FETCH_TRACKS_START });

    axiosWithAuth()
      .get(`api/tracks/${search}`)
      .then((res) => {
        dispatch({ type: FETCH_TRACKS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_TRACKS_ERROR, payload: err });
      });
  };
};
