import { LetterPostViewButton } from "Style/localStyle";
import React from "react";

export function ArtistsPostViewButton() {
  /**
   *  최정훈 버튼을 클릭하면   최정훈에 부합하는 게시물을 보여주는 함수
   */
  const onClickArtistViewPostButton = (selectValue) => {
    setSelectorValue(selectValue);
  };

  return (
    <>
      <LetterPostViewButton>
        <div className="button_post_view">
          <button
            key="choi"
            onClick={() => onClickArtistViewPostButton("최정훈")}
          >
            최정훈
          </button>
          <button
            key="kim"
            onClick={() => onClickArtistViewPostButton("김도형")}
          >
            김도형
          </button>
        </div>
      </LetterPostViewButton>
    </>
  );
}
