import { StLetterForm } from "style/GlobalStyle";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addZanNaBiLetter } from "store/modules/znbFanLetter";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export function LetterInputForm() {
  // nickname  content 는  입력 받기위해서
  const [nickname, setNickName] = useState("");
  const [content, setContent] = useState("");

  // buttonValue : 버튼값 게시물 조회 할 때
  const [buttonValue, setButtonValue] = useState("최정훈");

  // selectValue : 셀렉트박스에서 값 받을때
  const [selectValue, setSelectValue] = useState("최정훈");

  // 최종적인 데이터 저장하는 addZanNaBiLetter 적용하는데 쓰임
  const dispatch = useDispatch();

  // 다이나믹 라우팅에 이용하기위해서...
  const navigate = useNavigate();

  // useSelector 혹을 이용해서   리덕스 중앙저장소(store) 로 부터 데이터 받아옴
  const allZnbData = useSelector((state) => state.zaNaBiLetter);

  /** 셀렉트 박스에서 값  받을 때 이용되는 함수 */
  const onChangeSelect = (event) => {
    setSelectValue(event.target.value);
  };

  /**
   * 폼의 데이터를 입력받아서  저장해주는 함수
   */
  const onSubmitInputForm = (e) => {
    e.preventDefault();

    // inputDataInfo 객체로 받음
    const inputDataInfo = {
      createdAt: new Date().toISOString(),
      nickname,
      content,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
      writedTo: selectValue,
      id: uuidv4(),
    };

    console.log(inputDataInfo); // 궁금해서 찍어봄

    // 데이터 추가
    dispatch(addZanNaBiLetter(inputDataInfo));

    // 기존 props-drilling 에서 이용했던  리셋 적용
    setNickName("");
    setContent("");
  };

  // 버튼에 따라  보여지게 하는 함수
  const onClickArtistViewPostButton = (selectValue) => {
    setButtonValue(selectValue);
  };

  return (
    <>
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
          <select name="zanabi" onChange={onChangeSelect}>
            <option>최정훈</option>
            <option>김도형</option>
          </select>

          <StLetterFormOptionButton type="submit" onClick={onSubmitInputForm}>
            추가하기
          </StLetterFormOptionButton>
        </StLetterFormOption>
      </form>
      <StPostView>
        <StPostViewButton onClick={() => onClickArtistViewPostButton("최정훈")}>
          최정훈
        </StPostViewButton>
        <StPostViewButton onClick={() => onClickArtistViewPostButton("김도형")}>
          김도형
        </StPostViewButton>
      </StPostView>

      {allZnbData
        .filter((letter) => letter.writedTo === buttonValue)
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
