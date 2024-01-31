import { StLetterForm } from "Style/GlobalStyle";
import React from "react";

import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_CONTENT,
  ADD_LETTER,
  SET_NICKNAME,
  SET_SELECT_VALUE,
} from "ridux/modules/FanLetter";
import {
  StLetterFormOption,
  StLetterFormOptionButton,
} from "Style/LogicalStyle";

export function LetterInputForm() {
  const dispatch = useDispatch();

  // Redux store에서 상태 가져오기
  const { nickName, content, selectValue } = useSelector((state) => state);

  console.log("nickName", nickName);
  console.log("content", content);
  console.log("select", selectValue);

  /**
   * 입력 nickName 값 저장하는 함수
   */
  const onChangeNickName = (event) => {
    dispatch({ type: SET_NICKNAME, payload: event.target.value });
  };

  /**
   * 입력 content 값 저장하는 함수
   */
  const onChangeContent = (event) => {
    dispatch({ type: SET_CONTENT, payload: event.target.value });
  };

  /**
   * selectBox에서 선택한 option 값을 저장하는 함수
   */
  const onChangeSelect = (event) => {
    dispatch({ type: SET_SELECT_VALUE, payload: event.target.value });
  };

  /**
   *  입력폼을 제출하는 함수
   */

  const onSubmitInputForm = (event) => {
    event.preventDefault();

    // 현재 서비스 되고 있는 한국을 기준으로 toLocaleDateString...
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date().toLocaleDateString("ko-kr", options);

    dispatch({
      type: ADD_LETTER,
      payload: {
        createdAt: date,
        nickName,
        content,
        selectValue,
        id: uuidv4(),
      },
    });

    // 리셋
    dispatch({ type: SET_NICKNAME, payload: "" });
    dispatch({ type: SET_CONTENT, payload: "" });
  };

  return (
    <>
      <StLetterForm />
      <form onSubmit={onSubmitInputForm}>
        <input
          type="text"
          name="nickname"
          value={nickName}
          onChange={onChangeNickName}
          placeholder="닉네임"
          required
        />

        <br></br>
        <textarea
          type="text"
          name="content"
          value={content}
          onChange={onChangeContent}
          placeholder="내용"
          required
        />
        <br></br>

        <StLetterFormOption>
          <select name="zanabi" onChange={onChangeSelect} value={selectValue}>
            <option value="최정훈">최정훈</option>
            <option value="김도형">김도형</option>
          </select>

          <StLetterFormOptionButton type="submit">
            추가하기
          </StLetterFormOptionButton>
        </StLetterFormOption>
      </form>
    </>
  );
}
