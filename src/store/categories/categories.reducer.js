import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  if (type === CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS) {
    return {
      ...state,
      categories: payload,
      isLoading: false,
    };
  } else if (type === CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START) {
    return { ...state, isLoading: true };
  } else if (type === CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL) {
    return { ...state, error: payload, isLoading: false };
  }

  return state;
};
