import {
  FETCH_TRACKS_ERROR,
  FETCH_TRACKS_START,
  FETCH_TRACKS_SUCCESS,
} from "../actions";

const initialState = {
  results: {},
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
        results: action.payload,
      };
    case FETCH_TRACKS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
