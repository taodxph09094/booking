import { combineReducers } from "redux";

import modalTrailerReducer from "./reducers/ModalTrailer";
import lazyReducer from "./reducers/Lazy";
const rootReducer = combineReducers({
  modalTrailerReducer,
  lazyReducer,
});
export default rootReducer;
