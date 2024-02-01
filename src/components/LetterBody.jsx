import { useNavigate } from "react-router-dom";

import { LetterInputForm } from "./LetterInputForm";
import { ArtistsPostViewButton } from "./ArtistsPostViewButton";
import styled from "styled-components";
import { ThemeContext } from "context/LetterDataContext";
import { useContext } from "react";

export const LetterBody = () => {
  const navigate = useNavigate();

  const data = useContext(ThemeContext);
  console.log(data);

  return (
    <>
      <LetterInputForm />

      <ArtistsPostViewButton />

      {data.letterData
        .filter((letter) => letter.writedTo === data.selectValue)
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
