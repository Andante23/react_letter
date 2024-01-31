// fanLetterReducer.js

import { letterData } from "assets/data";

// import { letterData } from "assets/data";

const initialState = letterData;

// 액션 변수 정의
const ADD_ZNBILETTER = "ADD_ZNBLETTER";
const UPDATE_ZNBLETTER = "UPDATE_ZNBLETTER";
const DELETE_ZNBLETTER = "DELETE_ZNBLETTER";
const CHANGE_INPUT_NICKNAME = "CHANGE_INPUT_NICKNAME";
const CHANGE_INPUT_CONTENT = "CHANGE_INPUT_CONTENT"; // Corrected action type
const CHANGE_SELECT_VALUE = "CHANGE_SELECT_VALUE";

export const addZanNaBiLetter = (payload) => {
  return { type: ADD_ZNBILETTER, payload };
};

export const updateZanNaBiLetter = (payload) => {
  return { type: UPDATE_ZNBLETTER, payload };
};

export const deleteZanNaBiLetter = (payload) => {
  return { type: DELETE_ZNBLETTER, payload };
};

export const onChangeNickName = (payload) => {
  return { type: CHANGE_INPUT_NICKNAME, payload };
};

export const onChangeInputContent = (payload) => {
  // Added action creator
  return { type: CHANGE_INPUT_CONTENT, payload };
};

export const onChangeSelectValue = (payload) => {
  // Added action creator
  return { type: CHANGE_SELECT_VALUE, payload };
};

export const zaNaBiLetter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ZNBILETTER:
      return [...state, action.payload];

    case UPDATE_ZNBLETTER:
      // Assuming payload contains 'id' and 'editedContent'
      return state.map((letter) =>
        letter.id === action.payload.id
          ? { ...letter, content: action.payload.editedContent }
          : letter
      );

    case DELETE_ZNBLETTER:
      // Assuming payload contains 'id'
      return state.filter((letter) => letter.id !== action.payload.id);

    case CHANGE_INPUT_CONTENT:
      return {
        ...state,
        // Assuming 'inputContent' is a property in your state
        inputContent: action.payload,
      };

    case CHANGE_SELECT_VALUE:
      return {
        ...state,
        // Assuming 'selectValue' is a property in your state
        selectValue: action.payload,
      };

    default:
      return state;
  }
};
