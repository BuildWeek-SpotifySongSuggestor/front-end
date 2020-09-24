import { axiosWithAuth } from "../../utils";

export const FETCH_TRACKS_START = "FETCH_TRACKS_START";
export const FETCH_TRACKS_SUCCESS = "FETCH_TRACKS_SUCCESS";
export const FETCH_TRACKS_ID_SUCCESS = "FETCH_TRACKS_ID_SUCCESS";
export const FETCH_TRACKS_ERROR = "FETCH_TRACKS_ERROR";
export const ADD_TRACK_FAVORITES = "ADD_TRACK_FAVORITES";
export const REMOVE_TRACK_FAVORITES = "REMOVE_TRACK_FAVORITES";

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

export const fetchTrackById = (id) => {
  return (dispatch) => {
    dispatch({ type: FETCH_TRACKS_START });
    axiosWithAuth()
      .get(`api/tracks/${id}/single`)
      .then((res) => {
        dispatch({ type: FETCH_TRACKS_ID_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addTrackById = (id, userID) => {
  return (dispatch) => {
    dispatch({ type: FETCH_TRACKS_START });
    axiosWithAuth()
      .post(`api/favorites`, { id, userID })
      .then((res) => {
        debugger;
        console.log(res);
        dispatch({ type: ADD_TRACK_FAVORITES });
      })
      .catch((res) => {
        console.log(res);
      });
  };
};
