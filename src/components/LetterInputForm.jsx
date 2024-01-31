import { StLetterForm } from "Style/GlobalStyle";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addZanNaBiLetter } from "store/modules/znbFanLetter";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Navigate, useNavigate } from "react-router-dom";

export function LetterInputForm() {
  // nickname . artist , content 폼 내부에 있음
  const [nickname, setNickName] = useState("");
  const [artist, setArtist] = useState("");
  const [content, setContent] = useState("");

  // selectValue : 아티스트별  버튼  상태 관리
  const [selectValue, setSelectValue] = useState("최정훈");

  // 최종적인 데이터 저장하는 addZanNaBiLetter 적용하는데 쓰임
  const dispatch = useDispatch();

  // 라우팅
  const navigate = useNavigate();

  const onSubmitInputForm = (e) => {
    e.preventDefault();

    if (nickname === "" && content === "") {
      alert("전부 입력해주세요");
      return;
    }

    const inputDataInfo = {
      createdAt: new Date().toISOString(),
      nickname,
      content,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
      writedTo: selectValue,
      id: uuidv4(),
    };

    console.log(inputDataInfo);

    // 데이터 추가
    dispatch(addZanNaBiLetter(inputDataInfo));
  };

  const allZnbData = useSelector((state) => state.zaNaBiLetter);

  return (
    <>
      {/* StLetterForm이 styled component로 가정됩니다. */}
      <StLetterForm />
      <form>
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={(e) => {
            setNickName(e.target.value);
          }}
          placeholder="닉네임"
          required
        />
        <br />
        <textarea
          type="text"
          name="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="내용"
          required
        />
        <br />

        <StLetterFormOption>
          <select
            name="zanabi"
            onChange={(e) => {
              setArtist(e.target.value);
            }}
            value={artist}
          >
            <option value="최정훈">최정훈</option>
            <option value="김도형">김도형</option>
          </select>

          <StLetterFormOptionButton type="submit" onClick={onSubmitInputForm}>
            추가하기
          </StLetterFormOptionButton>
        </StLetterFormOption>
      </form>
      <StPostView>
        <StPostViewButton
          onClick={(e) => {
            setSelectValue("최정훈");
          }}
        >
          최정훈
        </StPostViewButton>
        <StPostViewButton
          onClick={(e) => {
            setSelectValue("김도형");
          }}
        >
          김도형
        </StPostViewButton>
      </StPostView>

      {allZnbData
        .filter((letter) => letter.writedTo === selectValue)
        .map((lD) => (
          <StFilTerCardBorder key={lD.id}>
            <StFilTerCardItem>
              <StFilTerCardItemHeroImage src={lD.avatar} alt="대체 이미지" />

              <p>
                <p>{lD.nickname}</p>
                <p>{lD.content}</p>
                <StToThePage>
                  <a
                    onClick={() => {
                      navigate(`/detail/${lD.id}`);
                    }}
                  >
                    더 보기
                  </a>
                </StToThePage>
              </p>
            </StFilTerCardItem>
          </StFilTerCardBorder>
        ))}
    </>
  );
}

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

const StPostView = styled.div`
  margin-left: 1600px;
  margin-top: 40px;
`;

const StPostViewButton = styled.button`
  border-radius: 10px;
  margin-left: 10px;
`;
const StFilTerCardBorder = styled.div`
  background-color: black;
  border-radius: 5px;
  color: white;
  margin: 10px;
`;

const StFilTerCardItem = styled.figure`
  display: flex;
  padding: 10px;
  align-items: center;
`;

const StFilTerCardItemHeroImage = styled.img`
  margin-left: 10px;
  margin-right: 12px;
  border-radius: 10px;
  width: 100px;
`;

const StToThePage = styled.p`
  margin-left: 1500px;
  margin-bottom: 10px;
  cursor: pointer;
`;
