import { FETCH_TRACKS_START } from "../actions/tracksActions";

const initialState = {};

export const tracksReducer = (state, action) => {
  switch (action.type) {
    case FETCH_TRACKS_START: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
