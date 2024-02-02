// 지역 스타일드 컴포넌트를 모아놓는 파일

import styled from "styled-components";

// LetterHeader 컴포넌트
export const StLetterHeader = styled.header`
  h1 {
    text-align: center;
  }
`;

// LetterInputForm 컴포넌트
export const StLetterFormOption = styled.div`
  margin-left: 300px;
`;

export const StLetterFormOptionButton = styled.button`
  margin: 10px;
  padding: 10px;
  border-color: #0b69d4;
  background-color: #0b69d4;
  border-radius: 10px;
  color: white;

  &:hover {
    background-color: #0680c2;
    border-color: #0680c2;
    cursor: pointer;
  }
`;

// LetterList 스타일드 컴포넌트

export const StFilTerCardBorder = styled.div`
  background-color: black;
  border-radius: 5px;
  color: white;
  margin: 10px;
`;

export const StFilTerCardItem = styled.figure`
  display: flex;
  padding: 10px;
  align-items: center;
`;

export const StFilTerCardItemHeroImage = styled.img`
  margin-left: 10px;
  margin-right: 12px;
  border-radius: 10px;
  width: 100px;
`;

export const StToThePage = styled.p`
  margin-left: 87.5rem;
  cursor: pointer;
`;

export const StPostView = styled.div`
  margin: auto;
`;

export const StPostViewButton = styled.button`
  border-radius: 5px;
  margin-left: 10px;
  padding: 10px;
`;

export const StFilTerCardData = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
`;

export const StFilTerNickName = styled.p`
  padding: auto;
`;

export const StFilTerContent = styled.p`
  padding: auto;
`;

// Detail 스타일드 컴포넌트
export const StLetterCard = styled.p`
  display: flex;
  justify-content: space-around;
`;

export const StLetterText = styled.textarea`
  width: 1200px;
  height: 500px;
  margin-top: 20px;
  margin-left: 500px;
  border-radius: 5px;
`;

export const StLetterCardOptionButton = styled.div`
  margin-top: 50px;
  margin-left: 1400px;
`;

export const StLetterCardSave = styled.button`
  margin-right: 10px;
  border-radius: 5px;
`;

export const StLetterCardCancel = styled.button`
  border-radius: 5px;
`;

export const StLetterCardDelete = styled.button`
  margin-right: 10px;
  border-radius: 5px;
`;

export const StLetterCardUpdate = styled.button`
  border-radius: 5px;
`;
