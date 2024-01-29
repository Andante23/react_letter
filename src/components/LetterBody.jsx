import { useNavigate } from "react-router-dom";

import { LetterCard, AddImageSize } from "Style/localStyle";
import { LetterInputForm } from "./LetterInputForm";
import { ArtistsPostViewButton } from "./ArtistsPostViewButton";

export const LetterBody = ({
  nickName,
  setNickName,
  content,
  setContent,
  selectValue,
  setSelectorValue,
  letterData,
  setLetterData,
}) => {
  const navigate = useNavigate();

  const imageStyleSize = {
    width: "100px",
    height: "100px",
  };

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

      <ArtistsPostViewButton setSelectorValue={setSelectorValue} />

      {/* 
          letterData 배열에서  writedTo(누구에게) 와  위에서 버튼으로 선택한 사람이 일치한 것을  새 배열로 만들어줍니다
          map으로 돌려서 데이터를  뿌려줍니다. 
      */}
      {letterData
        .filter((letter) => letter.writedTo === selectValue)
        .map((lD) => (
          <>
            <LetterCard>
              <figure key={lD.id} className="letter_card">
                <img src={lD.avatar} alt="" style={imageStyleSize} />

                <p className="letter_card_content">
                  <p>{lD.nickname}</p>
                  <p>{lD.content}</p>
                  <p className="letter_card_detail_button">
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        // 동적 라우팅이 되는 detail페이지에  state를 전달합니다
                        navigate(`/detail/${lD.id}`);
                      }}
                    >
                      더 보기
                    </button>
                  </p>
                </p>
              </figure>
            </LetterCard>
          </>
        ))}
    </>
  );
};
