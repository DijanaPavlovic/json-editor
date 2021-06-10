import { JsonData } from 'shared/types';
import { SET_JSON_DATA, UPDATE_JSON_DATA, JsonDataAction } from './actionTypes';

const initialState: JsonData = {};

const reducer = (state = initialState, action: JsonDataAction): JsonData => {
  switch (action.type) {
    case SET_JSON_DATA: {
      return action.payload;
    }

    case UPDATE_JSON_DATA: {
      const { id, key, value } = action.payload;

      return {
        ...state,
        [id]: {
          ...state[id],
          [key]: value,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
