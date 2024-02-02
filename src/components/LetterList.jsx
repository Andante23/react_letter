import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  StFilTerCardBorder,
  StFilTerCardItem,
  StFilTerCardItemHeroImage,
  StToThePage,
  StPostView,
  StFilTerCardData,
  StFilTerContent,
  StFilTerNickName,
  StPostViewButton,
} from "style/componentStyle/LetterListStyle";

/* LetterList : 선택한 아티스트에 따라 리스트를 보여주는 컴포넌트  */
const LetterList = () => {
  /*
    buttonValue : 아티스트별 게시물보여줄때 버튼 값
    navigate : 페이지 이동
    allZnbData : 잔나비 팬레터 데이터
    onClickArtistViewPostButton : 선택한 아티스트에따라 게시글이 보여지게 하는 함수 
   */
  const [buttonValue, setButtonValue] = useState("최정훈");
  const navigate = useNavigate();
  const allZnbData = useSelector((state) => state.zaNaBiLetter);
  const onClickArtistViewPostButton = (selectValue) => {
    setButtonValue(selectValue);
  };

  return (
    <>
      <StPostView>
        <StPostViewButton onClick={() => onClickArtistViewPostButton("최정훈")}>
          최정훈
        </StPostViewButton>
        <StPostViewButton onClick={() => onClickArtistViewPostButton("김도형")}>
          김도형
        </StPostViewButton>
      </StPostView>

      {/* 
          1. 모든 잔나비 팬 레터데이터에서 내가 선택한 버튼값에 따른  새 배열 생성
          2. map을 통해서 반복문 돌리기!!!!!
     */}

      {allZnbData
        .filter((letter) => letter.writedTo === buttonValue)
        .map((lD) => (
          <StFilTerCardBorder key={lD.id}>
            <StFilTerCardItem>
              <StFilTerCardItemHeroImage src={lD.avatar} alt="대체 이미지" />

              <StFilTerCardData>
                <StFilTerNickName>{lD.nickname}</StFilTerNickName>
                <StFilTerContent>
                  {lD.content.slice(0, 50) + "..."}
                </StFilTerContent>

                {/* 
                 
                리액트 라우터 돔 라이브러리의 메서드인 navigate를 이용해서
                detail 페이지로  다이나믹하게 이동하기 
               
               */}
                <StToThePage
                  onClick={() => {
                    navigate(`/detail/${lD.id}`);
                  }}
                >
                  더 보기
                </StToThePage>
              </StFilTerCardData>
            </StFilTerCardItem>
          </StFilTerCardBorder>
        ))}
    </>
  );
};

export default LetterList;
