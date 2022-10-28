import {
  ADMIN_RELEASEDTIME_FAIL,
  ADMIN_RELEASEDTIME_REQUEST,
  ADMIN_RELEASEDTIME_SUCCESS,
  ALL_RELEASEDTIME_FAIL,
  ALL_RELEASEDTIME_SUCCESS,
  CLEAR_ERRORS,
  DELETE_RELEASEDTIME_FAIL,
  DELETE_RELEASEDTIME_REQUEST,
  DELETE_RELEASEDTIME_RESET,
  DELETE_RELEASEDTIME_SUCCESS,
  RELEASEDTIME_DETAILS_FAIL,
  RELEASEDTIME_DETAILS_REQUEST,
  RELEASEDTIME_DETAILS_SUCCESS,
  NEW_RELEASEDTIME_FAIL,
  NEW_RELEASEDTIME_REQUEST,
  NEW_RELEASEDTIME_RESET,
  NEW_RELEASEDTIME_SUCCESS,
  UPDATE_RELEASEDTIME_FAIL,
  UPDATE_RELEASEDTIME_REQUEST,
  UPDATE_RELEASEDTIME_RESET,
  UPDATE_RELEASEDTIME_SUCCESS,
  ALL_RELEASEDTIMETIME_REQUEST,
} from "../constants/releasedTimeConstants";

export const releasedTimesReducer = (state = { releasedTimes: [] }, action) => {
  switch (action.type) {
    case ALL_RELEASEDTIMETIME_REQUEST:
    case ADMIN_RELEASEDTIME_REQUEST:
      return {
        loading: true,
        releasedTimes: [],
      };
    case ALL_RELEASEDTIME_SUCCESS:
      return {
        loading: false,
        releasedTimes: action.payload.releasedTimes,
        releasedTimesCount: action.payload.releasedTimesCount,
        resultPerPage: action.payload.resultPerPage,
        filteredReleasedTimesCount: action.payload.filteredReleasedTimesCount,
      };

    case ADMIN_RELEASEDTIME_SUCCESS:
      return {
        loading: false,
        releasedTimes: action.payload,
      };
    case ALL_RELEASEDTIME_FAIL:
    case ADMIN_RELEASEDTIME_FAIL:
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

export const newReleasedTimeReducer = (
  state = { releasedTime: {} },
  action
) => {
  switch (action.type) {
    case NEW_RELEASEDTIME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_RELEASEDTIME_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        releasedTime: action.payload.releasedTime,
      };
    case NEW_RELEASEDTIME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_RELEASEDTIME_RESET:
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

export const releasedTimeReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_RELEASEDTIME_REQUEST:
    case UPDATE_RELEASEDTIME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_RELEASEDTIME_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_RELEASEDTIME_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_RELEASEDTIME_FAIL:
    case UPDATE_RELEASEDTIME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_RELEASEDTIME_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_RELEASEDTIME_RESET:
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

export const releasedTimeDetailsReducer = (
  state = { releasedTime: {} },
  action
) => {
  switch (action.type) {
    case RELEASEDTIME_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case RELEASEDTIME_DETAILS_SUCCESS:
      return {
        loading: false,
        releasedTime: action.payload,
      };
    case RELEASEDTIME_DETAILS_FAIL:
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
