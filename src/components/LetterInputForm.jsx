import { StLetterForm } from "style/GlobalStyle";
import React from "react";

import {
  StLetterFormOption,
  StLetterFormOptionButton,
} from "style/componentStyle/LetterInputFormStyle";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "context/LetterDataContext";
import { useContext } from "react";

export function LetterInputForm() {
  const data = useContext(ThemeContext);

  /**
   * 입력 nickName 값 저장하는 함수
   */
  const onChangeNickName = (event) => {
    data.setNickName(event.target.value);
  };

  /**
   * 입력 content 값 저장하는 함수
   */
  const onChangeContent = (event) => {
    data.setContent(event.target.value);
  };

  /**
   * selectBox에서 선택한 option 값을 저장하는 함수
   */
  const onChangeSelect = (event) => {
    data.setSelectorValue(event.target.value);
  };

  /**
   *  입력폼을 제출하는 함수
   */

  const onSubmitInputForm = (event) => {
    event.preventDefault();

    // 만약 nickname ,content가 공백으로 입력받으면
    // trim을 통해 < 스페이스 4번 > 상태도.....입력 x
    if (data.nickName.trim() === "" && data.content.trim() === "") {
      //  경고 후~~~
      alert("입력란을 모두 입력해주세요");
      data.setNickName("");
      data.setContent("");
      //   입력 못받게 하기
      return;
    }

    // 현재 서비스 되고 있는 한국을 기준으로 toLocaleDateString...
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = new Date().toLocaleDateString("ko-kr", options);

    // 레터를 추가하겠습니까? 라고 사용자에게 물어보는 내용
    const isAdd = window.confirm("레터를 추가하겠습니까?");

    if (isAdd === true) {
      data.setLetterData((prevLetterData) => [
        ...prevLetterData,
        {
          createdAt: date,
          nickname: data.nickName,
          avatar:
            "https://t1.kakaocdn.net/together_image/common/avatar/avatar.png",
          content: data.content,
          writedTo: data.selectValue,
          id: uuidv4(),
        },
      ]);
      data.setNickName("");
      data.setContent("");
    } else {
      alert("취소하였습니다");
      data.setNickName("");
      data.setContent("");
      return;
    }
  };

  return (
    <>
      <StLetterForm />
      <form onSubmit={onSubmitInputForm}>
        <input
          type="text"
          name="nickname"
          value={data.nickName}
          onChange={onChangeNickName}
          placeholder="닉네임"
          required
        />

        <br></br>
        <textarea
          type="text"
          name="content"
          value={data.content}
          onChange={onChangeContent}
          placeholder="내용"
          required
        />
        <br></br>

        <StLetterFormOption>
          <select name="zanabi" onChange={onChangeSelect}>
            <option>최정훈</option>
            <option>김도형</option>
          </select>

          <StLetterFormOptionButton type="submit">
            추가하기
          </StLetterFormOptionButton>
        </StLetterFormOption>
      </form>
    </>
  );
}
