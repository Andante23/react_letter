import { LetterHeader } from "components/LetterHeader";
import { LetterBody } from "components/LetterBody";
import { useState } from "react";

const Home = ({
  nickName,
  setNickName,
  content,
  setContent,
  selectValue,
  setSelectorValue,
  letterData,
  setLetterData,
}) => {
  return (
    <>
      <LetterHeader></LetterHeader>
      <LetterBody
        nickName={nickName}
        setNickName={setNickName}
        content={content}
        setContent={setContent}
        selectValue={selectValue}
        setSelectorValue={setSelectorValue}
        letterData={letterData}
        setLetterData={setLetterData}
      ></LetterBody>
    </>
  );
};

export default Home;
