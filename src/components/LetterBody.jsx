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
  const handleArtistPostViewClick = (value) => setButtonValue(value);

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

      {/* 필터링된 데이터의 길이 !== 0 이 아니라면 
                             데이터를  표현하고 
                             아니면 
                                buttonValue에 해당하는 값이 없습니다 
     
     */}

      {letterData.filter((ld) => ld.writedTo === buttonValue).length !== 0 ? (
        <div>
          {letterData
            .filter((ld) => ld.writedTo === buttonValue)
            .map((ld) => {
              return (
                <StFilTerCardBorder>
                  <StFilTerCardItem>
                    <StFilTerCardItemHeroImage
                      src={ld.avatar}
                      alt="대체 이미지"
                    />

                    <p>
                      <p>{ld.nickname}</p>
                      <p>{ld.content.slice(0, 50) + "..."}</p>
                      <StToThePage>
                        <a
                          onClick={() => {
                            navigate(`/detail/${ld.id}`);
                          }}
                        >
                          더 보기
                        </a>
                      </StToThePage>
                    </p>
                  </StFilTerCardItem>
                </StFilTerCardBorder>
              );
            })}
        </div>
      ) : (
        <StNodataPage>
          <StNoDataWho>{buttonValue}</StNoDataWho>에 해당하는 값이 없습니다.
        </StNodataPage>
      )}
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

const StNoDataWho = styled.b`
  font-weight: 900;
  color: red;
`;

const StNodataPage = styled.p`
  margin-top: 100px;
  text-align: center;
  font-weight: 900;
  font-size: 30px;
`;
