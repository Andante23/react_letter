import React from "react";
import { LetterForm } from "Style/GlobalStyle";
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

    const date = new Date();

    setLetterData((prevLetterData) => [
      ...prevLetterData,
      {
        createdAt: date.toISOString(),
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
      <LetterForm />
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
        <div>
          <select name="zanabi" onChange={onChangeSelect} value={selectValue}>
            <option value="최정훈">최정훈</option>
            <option value="김도형">김도형</option>
          </select>
          <button type="submit">추가하기</button>
        </div>
      </form>
    </>
  );
}
