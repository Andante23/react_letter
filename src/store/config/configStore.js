// 저장소 파일
import { createStore, combineReducers } from "redux";
import { zaNaBiLetter } from "store/modules/znbFanLetter";
// In the file where you use the reducer

const rootReducer = combineReducers({
  // 생성한 module 넣기
  zaNaBiLetter,
});

const store = createStore(rootReducer);

export default store;
