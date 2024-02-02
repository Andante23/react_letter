import React from "react";
import styled from "styled-components";

/* LetterHeader : 편지페이지 상단...*/
export const LetterHeader = () => {
  return (
    <>
      <StLetterHeader>
        <h1>잔나비 Letter</h1>
      </StLetterHeader>
    </>
  );
};

const StLetterHeader = styled.header`
  h1 {
    text-align: center;
  }
`;
