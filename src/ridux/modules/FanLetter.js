import dummy from "assets/fakedata.json";

// 초기 상태
const initialState = {
  letterData: Array.isArray(dummy) ? dummy : [],
};

console.log(initialState);

// 액션 타입 정의
export const SET_NICKNAME = "SET_NICKNAME";
export const SET_CONTENT = "SET_CONTENT";
export const SET_SELECT_VALUE = "SET_SELECT_VALUE";
export const ADD_LETTER = "ADD_LETTER";
export const DELETE_LETTER = "DELETE_LETTER";
export const UPDATE_LETTER = "UPDATE_LETTER";
export const CHANGE_SELECTOR = "CHANGE_SELECTOR";

export const changeSelector = (value) => ({
  type: CHANGE_SELECTOR,
  payload: value,
});

// 리듀서 정의
export const FanLetterReducer = (state = initialState, action) => {
  switch (action.type) {
    // 액션타입에따라 처리할 행동 정의
    case SET_NICKNAME:
      return { ...state, nickName: action.payload };
    case SET_CONTENT:
      return { ...state, content: action.payload };
    case SET_SELECT_VALUE:
      return action.payload;
    case CHANGE_SELECTOR:
      return {
        ...state,
        selector: action.payload,
      };
    case ADD_LETTER:
      return {
        ...state,
        letterData: [
          ...state.letterData,
          {
            createdAt: action.payload.createdAt,
            nickname: action.payload.nickName,
            avatar:
              "https://t1.kakaocdn.net/together_image/common/avatar/avatar.png",
            content: action.payload.content,
            writedTo: action.payload.selectValue,
            id: action.payload.id,
          },
        ],
      };

    case DELETE_LETTER:
      return {
        ...state,
        letterData: state.letterData.filter(
          (letter) => letter.id !== action.payload.id
        ),
      };

    case UPDATE_LETTER:
      return {
        ...state,
        letterData: state.letterData.map((letter) =>
          letter.id === action.payload.id
            ? { ...letter, content: action.payload.content }
            : letter
        ),
      };

    default:
      return state;
  }
};
