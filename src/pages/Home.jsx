import { LetterHeader } from "components/LetterHeader";
import { LetterBody } from "components/LetterBody";

const Home = ({
  nickName,
  setNickName,
  content,
  setContent,
  selectValue,
  setSelectorValue,
  letterData,
  setLetterData,
  buttonValue,
  setButtonValue,
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
        buttonValue={buttonValue}
        setButtonValue={setButtonValue}
      ></LetterBody>
    </>
  );
};

export default Home;
