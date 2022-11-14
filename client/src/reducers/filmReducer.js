import {
  ADMIN_FILM_FAIL,
  ADMIN_FILM_REQUEST,
  ADMIN_FILM_SUCCESS,
  ALL_FILMDAILY_REQUEST,
  ALL_FILMDAILY_SUCCESS,
  ALL_FILMDAILY_FAIL,
  ALL_FILMCOMING_REQUEST,
  ALL_FILMCOMING_SUCCESS,
  ALL_FILMCOMING_FAIL,
  ALL_FILM_FAIL,
  ALL_FILM_REQUEST,
  ALL_FILM_SUCCESS,
  CLEAR_ERRORS,
  DELETE_FILM_FAIL,
  DELETE_FILM_REQUEST,
  DELETE_FILM_RESET,
  DELETE_FILM_SUCCESS,
  FILM_DETAILS_FAIL,
  FILM_DETAILS_REQUEST,
  FILM_DETAILS_SUCCESS,
  NEW_FILM_FAIL,
  NEW_FILM_REQUEST,
  NEW_FILM_RESET,
  NEW_FILM_SUCCESS,
  UPDATE_FILM_FAIL,
  UPDATE_FILM_REQUEST,
  UPDATE_FILM_RESET,
  UPDATE_FILM_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_RESET,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_RESET,
} from "../constants/filmConstants";

export const filmsReducer = (state = { films: [] }, action) => {
  switch (action.type) {
    case ALL_FILM_REQUEST:
    case ADMIN_FILM_REQUEST:
      return {
        loading: true,
        films: [],
      };
    case ALL_FILM_SUCCESS:
      return {
        loading: false,
        films: action.payload.films,
        filmsCount: action.payload.filmsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredFilmsCount: action.payload.filteredFilmsCount,
      };

    case ADMIN_FILM_SUCCESS:
      return {
        loading: false,
        films: action.payload,
      };
    case ALL_FILM_FAIL:
    case ADMIN_FILM_FAIL:
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

export const filmsCateReducer = (state = { filmCate: [] }, action) => {
  switch (action.type) {
    case ALL_FILMDAILY_REQUEST:
    case ADMIN_FILM_REQUEST:
      return {
        loading: true,
        filmCate: [],
      };
    case ALL_FILMDAILY_SUCCESS:
      return {
        loading: false,
        filmCate: action.payload.films,
        filmCateCount: action.payload.filmsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredFilmCateCount: action.payload.filteredFilmsCount,
      };

    case ADMIN_FILM_SUCCESS:
      return {
        loading: false,
        filmCate: action.payload,
      };
    case ALL_FILMDAILY_FAIL:
    case ADMIN_FILM_FAIL:
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
export const filmsComReducer = (state = { filmCom: [] }, action) => {
  switch (action.type) {
    case ALL_FILMCOMING_REQUEST:
    case ADMIN_FILM_REQUEST:
      return {
        loading: true,
        filmCom: [],
      };
    case ALL_FILMCOMING_SUCCESS:
      return {
        loading: false,
        filmCom: action.payload.films,
        filmComCount: action.payload.filmsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredFilmComCount: action.payload.filteredFilmsCount,
      };

    case ADMIN_FILM_SUCCESS:
      return {
        loading: false,
        filmCom: action.payload,
      };
    case ALL_FILMCOMING_FAIL:
    case ADMIN_FILM_FAIL:
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
export const newFilmReducer = (state = { film: {} }, action) => {
  switch (action.type) {
    case NEW_FILM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_FILM_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        film: action.payload.film,
      };
    case NEW_FILM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_FILM_RESET:
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

export const filmReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FILM_REQUEST:
    case UPDATE_FILM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_FILM_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_FILM_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_FILM_FAIL:
    case UPDATE_FILM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_FILM_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_FILM_RESET:
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

export const filmDetailsReducer = (state = { film: {} }, action) => {
  switch (action.type) {
    case FILM_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case FILM_DETAILS_SUCCESS:
      return {
        loading: false,
        film: action.payload,
      };
    case FILM_DETAILS_FAIL:
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

export const newReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_REVIEW_RESET:
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

export const filmReviewsReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case ALL_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_REVIEW_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case ALL_REVIEW_FAIL:
      return {
        ...state,
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

export const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_REVIEW_RESET:
      return {
        ...state,
        isDeleted: false,
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
