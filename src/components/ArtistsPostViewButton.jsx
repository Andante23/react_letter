import React from "react";
import styled from "styled-components";
import { LetterDataContext } from "context/LetterDataContext";
import { useContext } from "react";

export function ArtistsPostViewButton() {
  const data = useContext(LetterDataContext);

  const onClickArtistViewPostButton = (value = "") => {
    data.setSelectorValue(value);
  };

  return (
    <>
      <StPostView>
        <StPostViewButton
          key="choi"
          onClick={() => onClickArtistViewPostButton("최정훈")}
        >
          최정훈
        </StPostViewButton>
        <StPostViewButton
          key="kim"
          onClick={() => onClickArtistViewPostButton("김도형")}
        >
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
