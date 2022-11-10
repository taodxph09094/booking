import axios from "axios";
import {
  ADMIN_RELEASEDTIME_FAIL,
  ADMIN_RELEASEDTIME_REQUEST,
  ADMIN_RELEASEDTIME_SUCCESS,
  ALL_RELEASEDTIME_FAIL,
  ALL_RELEASEDTIME_SUCCESS,
  CLEAR_ERRORS,
  DELETE_RELEASEDTIME_FAIL,
  DELETE_RELEASEDTIME_REQUEST,
  DELETE_RELEASEDTIME_SUCCESS,
  RELEASEDTIME_DETAILS_FAIL,
  RELEASEDTIME_DETAILS_REQUEST,
  RELEASEDTIME_DETAILS_SUCCESS,
  NEW_RELEASEDTIME_FAIL,
  NEW_RELEASEDTIME_REQUEST,
  NEW_RELEASEDTIME_SUCCESS,
  UPDATE_RELEASEDTIME_FAIL,
  UPDATE_RELEASEDTIME_REQUEST,
  UPDATE_RELEASEDTIME_SUCCESS,
  ALL_RELEASEDTIMETIME_REQUEST,
} from "../constants/releasedTimeConstants";
// Get All ReleasedTimes
export const getReleasedTime =
  (keyword = "", currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_RELEASEDTIMETIME_REQUEST });

      let link = `/api/v1/releasedTimes?keyword=${keyword}&page=${currentPage}`;

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_RELEASEDTIME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_RELEASEDTIME_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getReleasedTimeByCinema =
  (brand = "", currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_RELEASEDTIMETIME_REQUEST });

      let link = `/api/v1/releasedTimes?brand=${brand}&page=${currentPage}`;

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_RELEASEDTIME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_RELEASEDTIME_FAIL,
        payload: error.response.data.message,
      });
    }
  };
export const getReleasedTimeByFilm =
  (keyword = "", currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_RELEASEDTIMETIME_REQUEST });

      let link = `/api/v1/releasedTimes?film=${keyword}&page=${currentPage}`;

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_RELEASEDTIME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_RELEASEDTIME_FAIL,
        payload: error.response.data.message,
      });
    }
  };
// Get All ReleasedTimes For Admin
export const getAdminReleasedTime = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_RELEASEDTIME_REQUEST });

    const { data } = await axios.get("/api/v1/admin/releasedTimes");
    console.log(data);
    dispatch({
      type: ADMIN_RELEASEDTIME_SUCCESS,
      payload: data.releasedTimes,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_RELEASEDTIME_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create ReleasedTime
export const createReleasedTime = (releasedTimeData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_RELEASEDTIME_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/releasedTime/new`,
      releasedTimeData,
      config
    );

    dispatch({
      type: NEW_RELEASEDTIME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_RELEASEDTIME_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update ReleasedTime
export const updateReleasedTime =
  (id, releasedTimeData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_RELEASEDTIME_REQUEST });

      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.put(
        `/api/v1/admin/releasedTime/${id}`,
        releasedTimeData,
        config
      );

      dispatch({
        type: UPDATE_RELEASEDTIME_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_RELEASEDTIME_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Delete ReleasedTime
export const deleteReleasedTime = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_RELEASEDTIME_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/releasedTime/${id}`);

    dispatch({
      type: DELETE_RELEASEDTIME_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_RELEASEDTIME_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get ReleasedTimes Details
export const getReleasedTimeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: RELEASEDTIME_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/releasedTime/${id}`);

    dispatch({
      type: RELEASEDTIME_DETAILS_SUCCESS,
      payload: data.releasedTime,
    });
  } catch (error) {
    dispatch({
      type: RELEASEDTIME_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
