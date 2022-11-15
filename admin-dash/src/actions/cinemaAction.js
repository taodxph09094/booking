import axios from "axios";
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
  DELETE_CINEMA_SUCCESS,
  CINEMA_DETAILS_FAIL,
  CINEMA_DETAILS_REQUEST,
  CINEMA_DETAILS_SUCCESS,
  NEW_CINEMA_FAIL,
  NEW_CINEMA_REQUEST,
  NEW_CINEMA_SUCCESS,
  UPDATE_CINEMA_FAIL,
  UPDATE_CINEMA_REQUEST,
  UPDATE_CINEMA_SUCCESS,
} from "../constants/cinemaConstants";
// Get All Cinemas
export const getCinema =
  (keyword = "", currentPage = 1, category, tag) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_CINEMA_REQUEST });

      let link = `/api/v1/cinemas?keyword=${keyword}&page=${currentPage}`;

      if (category) {
        link = `/api/v1/cinemas?keyword=${keyword}&page=${currentPage}&category=${category}&tag=${tag}`;
      }
      if (tag) {
        link = `/api/v1/cinemas?keyword=${keyword}&page=${currentPage}&category=${category}&tag=${tag}`;
      }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_CINEMA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_CINEMA_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Cinemas For Admin
export const getAdminCinema = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_CINEMA_REQUEST });

    const { data } = await axios.get("/api/v1/admin/cinemas");
    console.log(data);
    dispatch({
      type: ADMIN_CINEMA_SUCCESS,
      payload: data.cinemas,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_CINEMA_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Cinema
export const createCinema = (cinemaData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CINEMA_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/cinema/new`,
      cinemaData,
      config
    );

    dispatch({
      type: NEW_CINEMA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CINEMA_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Cinema
export const updateCinema = (id, cinemaData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CINEMA_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/cinema/${id}`,
      cinemaData,
      config
    );

    dispatch({
      type: UPDATE_CINEMA_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CINEMA_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Cinema
export const deleteCinema = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CINEMA_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/cinema/${id}`);

    dispatch({
      type: DELETE_CINEMA_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CINEMA_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Cinemas Details
export const getCinemaDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CINEMA_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/cinema/${id}`);

    dispatch({
      type: CINEMA_DETAILS_SUCCESS,
      payload: data.cinema,
    });
  } catch (error) {
    dispatch({
      type: CINEMA_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
