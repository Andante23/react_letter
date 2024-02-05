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
        <>
          <StNodataPage>
            <StNoDataWho>{buttonValue}</StNoDataWho>에 해당하는 값이 없습니다.
          </StNodataPage>
        </>
      )}
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
