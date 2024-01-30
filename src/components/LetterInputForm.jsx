import { StLetterForm } from "Style/GlobalStyle";
import React from "react";
import styled from "styled-components";

import { v4 as uuidv4 } from "uuid";

export function LetterInputForm({
  nickName,
  setNickName,
  content,
  setContent,
  selectValue,
  setSelectorValue,
  setLetterData,
}) {
  /**
   * 입력 nickName 값 저장하는 함수
   */
  const onChangeNickName = (event) => {
    setNickName(event.target.value);
  };

  /**
   * 입력 content 값 저장하는 함수
   */
  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  /**
   * selectBox에서 선택한 option 값을 저장하는 함수
   */
  const onChangeSelect = (event) => {
    setSelectorValue(event.target.value);
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

    setLetterData((prevLetterData) => [
      ...prevLetterData,
      {
        createdAt: date,
        nickname: nickName,
        avatar:
          "https://t1.kakaocdn.net/together_image/common/avatar/avatar.png",
        content: content,
        writedTo: selectValue,
        id: uuidv4(),
      },
    ]);
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

// 지역 스타일링

const StLetterFormOption = styled.div`
  margin-left: 300px;
`;

const StLetterFormOptionButton = styled.button`
  margin: 10px;
  padding: 10px;
  border-color: #0b69d4;
  background-color: #0b69d4;
  border-radius: 10px;
  color: white;

  &:hover {
    background-color: #0680c2;
    border-color: #0680c2;
    cursor: pointer;
  }
`;
