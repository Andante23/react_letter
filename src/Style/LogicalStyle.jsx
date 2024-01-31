import styled from "styled-components";

// LetterInputForm.jsx
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

// LetterBody.jsx

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
  margin-left: auto;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const StPostView = styled.div`
  margin-left: 1600px;
  margin-top: 40px;
`;

export const StPostViewButton = styled.button`
  border-radius: 10px;
  margin-left: 10px;
`;

// Detail

export const StLetterCard = styled.p`
  display: flex;
  justify-content: space-around;
`;

export const StLetterText = styled.textarea`
  width: 900px;
  height: 100px;
  margin-top: 40px;
  margin-left: 450px;
`;

export const StLetterCardOptionButton = styled.div`
  margin-left: 1200px;
  margin-top: 10px;
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

// LetterHeader.jsx

export const StLetterHeader = styled.header`
  header {
    text-align: center;
  }
`;
