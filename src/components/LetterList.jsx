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
} from "style/LogicalStyle";
/*
  LetterList : 선택한 아티스트에 따라 리스트를 보여주는 컴포넌트 
 */
const LetterList = () => {
  /*
    buttonValue : 아티스트별 게시물보여줄때 버튼 값
    navigate : 페이지 이동
    allZnbData : 잔나비 팬레터 데이터 
 */
  const [buttonValue, setButtonValue] = useState("최정훈");
  const navigate = useNavigate();
  const allZnbData = useSelector((state) => state.zaNaBiLetter);

  // onClickArtistViewPostButton : 선택한 아티스트에따라 게시글이 보여지게 하는 함수
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

      {allZnbData
        .filter((letter) => letter.writedTo === buttonValue)
        .map((lD) => (
          <StFilTerCardBorder key={lD.id}>
            <StFilTerCardItem>
              <StFilTerCardItemHeroImage src={lD.avatar} alt="대체 이미지" />

              <StFilTerCardData>
                <StFilTerNickName>{lD.nickname}</StFilTerNickName>
                <StFilTerContent>{lD.content}</StFilTerContent>

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
