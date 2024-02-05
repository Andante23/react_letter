import { useNavigate } from "react-router-dom";

import { LetterInputForm } from "./LetterInputForm";
import { ArtistsPostViewButton } from "./ArtistsPostViewButton";
import styled from "styled-components";

/*
  데이터 보여주는  컴포넌트 
*/
export const LetterBody = ({
  nickName,
  setNickName,
  content,
  setContent,
  selectValue,
  setSelectorValue,
  letterData,
  setLetterData,
  setButtonValue,
  buttonValue,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <LetterInputForm
        nickName={nickName}
        setNickName={setNickName}
        setContent={setContent}
        content={content}
        setLetterData={setLetterData}
        selectValue={selectValue}
        setSelectorValue={setSelectorValue}
      />

      <ArtistsPostViewButton
        setSelectorValue={setSelectorValue}
        setButtonValue={setButtonValue}
      />

      {letterData
        .filter((letter) => letter.writedTo === buttonValue)
        .map((lD) => (
          <StFilTerCardBorder key={lD.id}>
            <StFilTerCardItem>
              <StFilTerCardItemHeroImage src={lD.avatar} alt="대체 이미지" />

              <p>
                <p>{lD.nickname}</p>
                <p>{lD.content.slice(0, 50) + "..."}</p>
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
};

// 지역 스타일링

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
