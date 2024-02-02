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

import { ThemeContext } from "context/LetterDataContext";
import { useContext } from "react";
import { LetterInputForm } from "./LetterInputForm";

export const LetterBody = () => {
  const navigate = useNavigate();

  const data = useContext(ThemeContext);
  const { setSelectorValue, letterData, buttonValue } = data;

  const onClickArtistViewPostButton = (value = "") => {
    setSelectorValue(value);
  };

  return (
    <>
      <LetterInputForm />

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

      {letterData
        .filter((letter) => letter.writedTo === buttonValue)
        .map((lD) => (
          <StFilTerCardBorder key={lD.id}>
            <StFilTerCardItem>
              <StFilTerCardItemHeroImage src={lD.avatar} alt="대체 이미지" />

              <StFilTerCardData>
                <StFilTerNickName>{lD.nickname}</StFilTerNickName>
                <StFilTerContent>
                  {/* 내용이 50자가 넘으면 그 부분을 ...로 바꾸기 */}
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
