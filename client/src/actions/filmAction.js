import axios from "axios";
import {
  ADMIN_FILM_FAIL,
  ADMIN_FILM_REQUEST,
  ADMIN_FILM_SUCCESS,
  ALL_FILMCOMING_FAIL,
  ALL_FILMCOMING_REQUEST,
  ALL_FILMCOMING_SUCCESS,
  ALL_FILMDAILY_FAIL,
  ALL_FILMDAILY_REQUEST,
  ALL_FILMDAILY_SUCCESS,
  ALL_FILM_FAIL,
  ALL_FILM_REQUEST,
  ALL_FILM_SUCCESS,
  ALL_REVIEW_FAIL,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  CLEAR_ERRORS,
  DELETE_FILM_FAIL,
  DELETE_FILM_REQUEST,
  DELETE_FILM_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  FILM_DETAILS_FAIL,
  FILM_DETAILS_REQUEST,
  FILM_DETAILS_SUCCESS,
  NEW_FILM_FAIL,
  NEW_FILM_REQUEST,
  NEW_FILM_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  UPDATE_FILM_FAIL,
  UPDATE_FILM_REQUEST,
  UPDATE_FILM_SUCCESS,
} from "../constants/filmConstants";
// Get All FILMs
export const getFilm =
  (keyword = "", currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_FILM_REQUEST });

      let link = `/api/v1/films?keyword=${keyword}&page=${currentPage}`;

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_FILM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_FILM_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getFilmByComing =
  (currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_FILMCOMING_REQUEST });

      let link = `/api/v1/comingFilms?page=${currentPage}`;

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_FILMCOMING_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_FILMCOMING_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getFilmByDaily =
  (currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_FILMDAILY_REQUEST });

      let link = `/api/v1/dailyFilms?page=${currentPage}`;

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_FILMDAILY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_FILMDAILY_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All FILMs For Admin
export const getAdminFilm = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_FILM_REQUEST });

    const { data } = await axios.get("/api/v1/admin/films");
    console.log(data);
    dispatch({
      type: ADMIN_FILM_SUCCESS,
      payload: data.films,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_FILM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create FILM
export const createFilm = (filmData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_FILM_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/film/new`,
      filmData,
      config
    );

    dispatch({
      type: NEW_FILM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_FILM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update FILM
export const updateFilm = (id, filmData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_FILM_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/film/${id}`,
      filmData,
      config
    );

    dispatch({
      type: UPDATE_FILM_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_FILM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete FILM
export const deleteFilm = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_FILM_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/film/${id}`);

    dispatch({
      type: DELETE_FILM_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_FILM_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get FILMs Details
export const getFilmDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: FILM_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/film/${id}`);

    dispatch({
      type: FILM_DETAILS_SUCCESS,
      payload: data.film,
    });
  } catch (error) {
    dispatch({
      type: FILM_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
//NEW REVIEW
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/api/v1/review`, reviewData, config);

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Reviews of a Films
export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

    dispatch({
      type: ALL_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    dispatch({
      type: ALL_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Review of a Film
export const deleteReviews = (reviewId, filmId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/api/v1/reviews?id=${reviewId}&filmId=${filmId}`
    );

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
