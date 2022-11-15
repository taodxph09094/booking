import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";
import {
  newNewFeedReducer,
  newFeedDetailsReducer,
  newFeedReducer,
  newFeedsReducer,
} from "./reducers/newFeedReducer";
import {
  newCouponReducer,
  couponDetailsReducer,
  couponReducer,
  couponsReducer,
} from "./reducers/couponReducer";
import {
  bannerDetailsReducer,
  bannerReducer,
  bannersReducer,
  newBannerReducer,
} from "./reducers/bannerReducer";
import {
  allFeedbackReducer,
  newFeedbackReducer,
  feedbackReducer,
  feedbackDetailsReducer,
} from "./reducers/feedbackReducer";
import {
  cinemaDetailsReducer,
  cinemaReducer,
  cinemasReducer,
  newCinemaReducer,
} from "./reducers/cinemaReducer";
import {
  filmDetailsReducer,
  filmReducer,
  filmsReducer,
  filmsCateReducer,
  filmsComReducer,
  newFilmReducer,
  newReviewReducer,
  filmReviewsReducer,
  reviewReducer,
} from "./reducers/filmReducer";
import {
  releasedTimeDetailsReducer,
  releasedTimeReducer,
  releasedTimesReducer,
  newReleasedTimeReducer,
} from "./reducers/releasedTimeReducer";
import modalTrailerReducer from "./reducers/ModalTrailer";
import lazyReducer from "./reducers/Lazy";

const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  cart: cartReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newNewFeed: newNewFeedReducer,
  newFeedDetails: newFeedDetailsReducer,
  newFeed: newFeedReducer,
  newFeeds: newFeedsReducer,
  newCoupon: newCouponReducer,
  couponDetails: couponDetailsReducer,
  coupon: couponReducer,
  coupons: couponsReducer,
  allFeedback: allFeedbackReducer,
  newFeedback: newFeedbackReducer,
  feedback: feedbackReducer,
  feedbackDetails: feedbackDetailsReducer,
  newCinema: newCinemaReducer,
  cinemaDetails: cinemaDetailsReducer,
  cinema: cinemaReducer,
  cinemas: cinemasReducer,
  newFilm: newFilmReducer,
  filmDetails: filmDetailsReducer,
  film: filmReducer,
  films: filmsReducer,
  filmCate: filmsCateReducer,
  filmCom: filmsComReducer,
  newReview: newReviewReducer,
  filmReviews: filmReviewsReducer,
  review: reviewReducer,
  newReleasedTime: newReleasedTimeReducer,
  releasedTimeDetails: releasedTimeDetailsReducer,
  releasedTime: releasedTimeReducer,
  releasedTimes: releasedTimesReducer,
  // modalTrailer: modalTrailerReducer,
  newBanner: newBannerReducer,
  bannerDetails: bannerDetailsReducer,
  banner: bannerReducer,
  banners: bannersReducer,
  modalTrailerReducer,
  lazyReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shipingInfo: localStorage.getItem("shipingInfo")
      ? JSON.parse(localStorage.getItem("shipingInfo"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
