import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import dummy from "assets/fakedata.json";
import { Link } from "react-router-dom";

export const LetterBody = () => {
  // 값이 변동이 있는 변수들은  useState로 보관하기
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [selectValue, setSelectorValue] = useState("최정훈");
  const [letterData, setLetterData] = useState(dummy);

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

    setContent("");
    setNickName("");
  };

  const onClickArtistViewPostButton = (artistName) => {
    setSelectorValue(artistName);
  };

  return (
    <>
      <form onSubmit={onSubmitInputForm}>
        <input
          type="text"
          name="nickname"
          value={nickName}
          onChange={onChangeNickName}
          required
        />
        <input
          type="text"
          name="content"
          value={content}
          onChange={onChangeContent}
          required
        />
        <select name="zanabi" onChange={onChangeSelect} value={selectValue}>
          <option value="최정훈">최정훈</option>
          <option value="김도형">김도형</option>
        </select>
        <button type="submit">추가하기</button>
      </form>

      <div>
        <button
          key="choi"
          onClick={() => onClickArtistViewPostButton("최정훈")}
        >
          최정훈
        </button>
        <button key="kim" onClick={() => onClickArtistViewPostButton("김도형")}>
          김도형
        </button>
      </div>

      {letterData
        .filter((letter) => letter.writedTo === selectValue)
        .map((lD) => (
          <div key={lD.id}>
            <img src={lD.avatar} alt="" />
            <p>{lD.nickname}</p>
            <p>{lD.content}</p>
            <Link to={`/detail/${lD.id}`}>
              <span style={{ cursor: "pointer" }}>더 보기{lD.writedTo}</span>
            </Link>
          </div>
        ))}
    </>
  );
};
