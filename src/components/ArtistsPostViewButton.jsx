import React from "react";
import styled from "styled-components";
export function ArtistsPostViewButton({ setButtonValue }) {
  //  최정훈 버튼을 클릭하면   최정훈에 부합하는 게시물을 보여주는 함수
  const handleArtistPostViewClick = (value) => {
    setButtonValue(value);
  };

  return (
    <>
      <StPostView>
        <StPostViewButton onClick={() => handleArtistPostViewClick("최정훈")}>
          최정훈
        </StPostViewButton>
        <StPostViewButton onClick={() => handleArtistPostViewClick("김도형")}>
          김도형
        </StPostViewButton>
      </StPostView>
    </>
  );
}

const StPostView = styled.div`
  margin-left: 1600px;
  margin-top: 40px;
`;

const StPostViewButton = styled.button`
  border-radius: 10px;
  margin-left: 10px;
`;
