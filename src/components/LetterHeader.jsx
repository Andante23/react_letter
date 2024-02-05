import React from "react";
import styled from "styled-components";

export const LetterHeader = () => {
  return (
    <>
      <StLetterHeader>
        <StLetterHTag>잔나비 Letter</StLetterHTag>
      </StLetterHeader>
    </>
  );
};

const StLetterHeader = styled.header`
  text-align: center;
`;

const StLetterHTag = styled.h1`
  margin: 10px;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
`;
