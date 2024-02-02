import { LetterBody } from "components/LetterBody";
import { LetterHeader } from "components/LetterHeader";

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
      <LetterHeader />
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
      />
    </>
  );
};

export default Home;
