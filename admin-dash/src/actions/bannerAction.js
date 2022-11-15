import axios from "axios";
import {
  ADMIN_BANNER_FAIL,
  ADMIN_BANNER_REQUEST,
  ADMIN_BANNER_SUCCESS,
  ALL_BANNER_FAIL,
  ALL_BANNER_REQUEST,
  ALL_BANNER_SUCCESS,
  CLEAR_ERRORS,
  DELETE_BANNER_FAIL,
  DELETE_BANNER_REQUEST,
  DELETE_BANNER_SUCCESS,
  BANNER_DETAILS_FAIL,
  BANNER_DETAILS_REQUEST,
  BANNER_DETAILS_SUCCESS,
  NEW_BANNER_FAIL,
  NEW_BANNER_REQUEST,
  NEW_BANNER_SUCCESS,
  UPDATE_BANNER_FAIL,
  UPDATE_BANNER_REQUEST,
  UPDATE_BANNER_SUCCESS,
} from "../constants/bannerConstants";
// Get All banners
export const getBanner =
  (currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_BANNER_REQUEST });

      let link = `/api/v1/banners?page=${currentPage}`;

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_BANNER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_BANNER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Banners For Admin
export const getAdminBanner = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_BANNER_REQUEST });

    const { data } = await axios.get("/api/v1/admin/banners");
    console.log(data);
    dispatch({
      type: ADMIN_BANNER_SUCCESS,
      payload: data.banners,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_BANNER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Banner
export const createBanner = (bannerData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BANNER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/banner/create`,
      bannerData,
      config
    );

    dispatch({
      type: NEW_BANNER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_BANNER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Banner
export const updateBanner = (id, bannerData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BANNER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/banner/${id}`,
      bannerData,
      config
    );

    dispatch({
      type: UPDATE_BANNER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BANNER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Banner
export const deleteBanner = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BANNER_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/banner/${id}`);

    dispatch({
      type: DELETE_BANNER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BANNER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Banners Details
export const getBannerDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BANNER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/banner/${id}`);

    dispatch({
      type: BANNER_DETAILS_SUCCESS,
      payload: data.banner,
    });
  } catch (error) {
    dispatch({
      type: BANNER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
