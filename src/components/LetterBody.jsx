import { useNavigate } from "react-router-dom";
import { LetterInputForm } from "./LetterInputForm";

import { useDispatch, useSelector } from "react-redux";
import { changeSelector } from "ridux/modules/FanLetter";
import {
  StFilTerCardBorder,
  StFilTerCardItem,
  StFilTerCardItemHeroImage,
  StToThePage,
} from "Style/LogicalStyle";

export const LetterBody = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.selector);
  const letterData = useSelector((state) => state.FanLetterReducer.letterData);

  // 선택한 값 업데이트 함수
  const onClickArtistViewPostButton = (value = "") => {
    // 액션 디스패치
    dispatch(changeSelector(value));
  };

  console.log(letterData);

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

      {letterData
        .filter((letter) => letter.writedTo === selector)
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
