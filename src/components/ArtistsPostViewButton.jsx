import React from "react";
import styled from "styled-components";
import { ThemeContext } from "context/LetterDataContext";
import { useContext } from "react";

export function ArtistsPostViewButton() {
  const data = useContext(ThemeContext);

  const { setSelectorValue } = data;

  return <></>;
}

const StPostView = styled.div`
  margin-left: 1600px;
  margin-top: 40px;
`;

const StPostViewButton = styled.button`
  border-radius: 10px;
  margin-left: 10px;
`;
