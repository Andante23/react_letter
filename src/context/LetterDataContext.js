import { createContext, useState } from "react";
import dummy from "assets/fakedata.json";

export const FanLetterDataContext = createContext(null);

export const FanLetterContext = (props) => {
  // 값이 변동이 있는 변수들은  useState로 보관하기
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [selectValue, setSelectorValue] = useState("최정훈");
  const [letterData, setLetterData] = useState(dummy);
  const [buttonValue, setButtonValue] = useState("최정훈");

  return (
    <FanLetterDataContext.Provider
      value={{
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
      }}
    >
      {/* 
          왜 props.children를  사용하는가? 
          FanLetterDataContext 컴포넌트가 감싸고 있는 모든 자식 컴포넌트에게 해당 컨텍스트 값 전달 
      */}
      {props.children}
    </FanLetterDataContext.Provider>
  );
};
