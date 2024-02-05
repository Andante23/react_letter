import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FanLetterDataContext } from "context/LetterDataContext";
import { useContext } from "react";
import { LetterInputForm } from "./LetterInputForm";

export const LetterBody = () => {
  const navigate = useNavigate();

  const data = useContext(FanLetterDataContext);

  const { setButtonValue, letterData, buttonValue } = data;

  // 아티스트별 게시물을 보여주는 로직
  const handleArtistPostViewClick = (value) => {
    setButtonValue(value);
  };

  return (
    <>
      <LetterInputForm />

      <StPostView>
        <StPostViewButton onClick={() => handleArtistPostViewClick("최정훈")}>
          최정훈
        </StPostViewButton>
        <StPostViewButton onClick={() => handleArtistPostViewClick("김도형")}>
          김도형
        </StPostViewButton>
      </StPostView>

      {/* 
         예시 :  버튼 값이 만약에  김도형이라면 

                 김도형에 맞는 게시물을 보여드립시다. 
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
                  {/*  긴 문자열 일부 생략 처리  */}
                  {lD.content.slice(0, 50) + "..."}
                </StFilTerContent>

                {/* 
                    특정 id값을 가진 상세정보 페이지로 이동 
                  
                    예시 : 
                          id가 .... 인 사람의 상세정보페이지로 이동한다고 보시면 됩니다.  
                
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
  margin-left: 87.5rem;
  cursor: pointer;
`;

const StPostView = styled.div`
  margin: auto;
`;

const StPostViewButton = styled.button`
  border-radius: 5px;
  margin-left: 10px;
  padding: 10px;
`;

const StFilTerCardData = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
`;

const StFilTerNickName = styled.p`
  padding: auto;
`;

const StFilTerContent = styled.p`
  padding: auto;
`;
