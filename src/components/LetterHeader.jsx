import React from "react";
import { styled } from "styled-components";

const HeaderStyle = styled.header`
  font-size: 20px;
  background-color: #141513;
  color: white;
  text-align: center;
  background-size: auto;
`;

export const LetterHeader = () => {
  return (
    <>
      <HeaderStyle>
        <h1>잔나비 Letter</h1>
      </HeaderStyle>
    </>
  );
};
