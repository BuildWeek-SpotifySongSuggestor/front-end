import { FETCH_TRACKS_START, FETCH_TRACKS_SUCCESS } from "../actions";

const initialState = {
  tracks: [],
  isLoading: false,
  error: "",
};

export const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRACKS_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tracks: action.payload,
      };
    default:
      return state;
  }
};
