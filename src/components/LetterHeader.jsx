import React from "react";
import styled from "styled-components";

export const LetterHeader = () => {
  return (
    <>
      <StLetterHeader>
        <header>
          <h1>잔나비 Letter</h1>
        </header>
      </StLetterHeader>
    </>
  );
};

const StLetterHeader = styled.header`
  header {
    text-align: center;
  }
`;
