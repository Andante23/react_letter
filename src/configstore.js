import { createStore, combineReducers } from "redux";
import { FanLetterReducer } from "./ridux/modules/FanLetter";

const rootReducer = combineReducers({
  // 생성한 module 넣기
  FanLetterReducer,
});
const store = createStore(rootReducer);
export default store;
