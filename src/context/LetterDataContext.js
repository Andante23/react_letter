import { createContext, useState } from "react";
import dummy from "assets/fakedata.json";
export const ThemeContext = createContext(null);

export const AuthContext = (props) => {
  // 값이 변동이 있는 변수들은  useState로 보관하기
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");
  const [selectValue, setSelectorValue] = useState("최정훈");
  const [letterData, setLetterData] = useState(dummy);
  const [buttonValue, setButtonValue] = useState("최정훈");

  return (
    <ThemeContext.Provider
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
      {props.children}
    </ThemeContext.Provider>
  );
};
