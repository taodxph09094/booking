import {
  ADMIN_CINEMA_FAIL,
  ADMIN_CINEMA_REQUEST,
  ADMIN_CINEMA_SUCCESS,
  ALL_CINEMA_FAIL,
  ALL_CINEMA_REQUEST,
  ALL_CINEMA_SUCCESS,
  CLEAR_ERRORS,
  DELETE_CINEMA_FAIL,
  DELETE_CINEMA_REQUEST,
  DELETE_CINEMA_RESET,
  DELETE_CINEMA_SUCCESS,
  CINEMA_DETAILS_FAIL,
  CINEMA_DETAILS_REQUEST,
  CINEMA_DETAILS_SUCCESS,
  NEW_CINEMA_FAIL,
  NEW_CINEMA_REQUEST,
  NEW_CINEMA_RESET,
  NEW_CINEMA_SUCCESS,
  UPDATE_CINEMA_FAIL,
  UPDATE_CINEMA_REQUEST,
  UPDATE_CINEMA_RESET,
  UPDATE_CINEMA_SUCCESS,
} from "../constants/cinemaConstants";

export const cinemasReducer = (state = { cinemas: [] }, action) => {
  switch (action.type) {
    case ALL_CINEMA_REQUEST:
    case ADMIN_CINEMA_REQUEST:
      return {
        loading: true,
        cinemas: [],
      };
    case ALL_CINEMA_SUCCESS:
      return {
        loading: false,
        cinemas: action.payload.cinemas,
        cinemasCount: action.payload.cinemasCount,
        resultPerPage: action.payload.resultPerPage,
        filteredCinemasCount: action.payload.filteredCinemasCount,
      };

    case ADMIN_CINEMA_SUCCESS:
      return {
        loading: false,
        cinemas: action.payload,
      };
    case ALL_CINEMA_FAIL:
    case ADMIN_CINEMA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newCinemaReducer = (state = { cinema: {} }, action) => {
  switch (action.type) {
    case NEW_CINEMA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CINEMA_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        cinema: action.payload.cinema,
      };
    case NEW_CINEMA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CINEMA_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const cinemaReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CINEMA_REQUEST:
    case UPDATE_CINEMA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CINEMA_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_CINEMA_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_CINEMA_FAIL:
    case UPDATE_CINEMA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CINEMA_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_CINEMA_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const cinemaDetailsReducer = (state = { cinema: {} }, action) => {
  switch (action.type) {
    case CINEMA_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case CINEMA_DETAILS_SUCCESS:
      return {
        loading: false,
        cinema: action.payload,
      };
    case CINEMA_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
