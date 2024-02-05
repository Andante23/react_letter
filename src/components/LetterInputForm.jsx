import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

/*LetterForm : 편지 입력폼 컴포넌트 */
export function LetterInputForm({
  nickName,
  setNickName,
  content,
  setContent,
  selectValue,
  setSelectorValue,
  setLetterData,
}) {
  /*
   onChangeSelect : 셀렉트 박스에서 얻은 값을 저장하는 함수
   onChangeNickName : nickname 인풋에서 얻은 값을 저장하는 함수
   onChangeContent : content 인풋에서 얻은 값을 저장하는 함수 
   onSubmitInputForm : 입력값을 최종적으로  저장하는 함수 
*/

  const onChangeSelect = (event) => setSelectorValue(event.target.value);

  const onSubmitInputForm = (event) => {
    event.preventDefault();

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    // date : 현재 서비스 되고 있는 한국의 날짜 데이터 저장
    const date = new Date().toLocaleDateString("ko-kr", options);

    // 레터를 추가하겠습니까? 라고 사용자에게 물어보는 내용
    const isAdd = window.confirm("레터를 추가하겠습니까?");
    if (isAdd === true) {
      // 최종적인 입력 데이터를 저장하기
      setLetterData((prevLetterData) => [
        ...prevLetterData,
        {
          createdAt: date,
          nickname: nickName,
          avatar:
            "https://t1.kakaocdn.net/together_image/common/avatar/avatar.png",
          content: content,
          writedTo: selectValue,
          id: uuidv4(),
        },
      ]);
    } else {
      alert("취소하였습니다");
      setNickName("");
      setContent("");
      return;
    }

    // 만약 nickname ,content가 공백으로 입력받으면
    // trim을 통해 < 스페이스 4번 > 상태도.....입력 x
    if (nickName.trim() === "" && content.trim() === "") {
      //  경고 후~~~
      alert("입력란을 모두 입력해주세요");
      setNickName("");
      setContent("");
      //   입력 못받게 하기
      return;
    }

    // 폼 리셋
    setContent("");
    setNickName("");
  };

  return (
    <>
      <StLetterForm>
        <StLetterInputDisplay>
          <StLetterFormInput
            type="text"
            name="nickname"
            value={nickName}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
            placeholder="닉네임"
            required
          />
          <br />
          <StLetterFormTextArea
            type="text"
            name="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="내용"
            required
          />
          <br />
        </StLetterInputDisplay>
        <StLetterFormOption>
          <select name="zanabi" onChange={onChangeSelect}>
            <option value={"최정훈"}>최정훈</option>
            <option value={"김도형"}>김도형</option>
          </select>

          <StLetterFormOptionButton type="submit" onClick={onSubmitInputForm}>
            추가하기
          </StLetterFormOptionButton>
        </StLetterFormOption>
      </StLetterForm>
    </>
  );
}

// LetterInputForm 컴포넌트
const StLetterForm = styled.form`
  margin: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const StLetterInputDisplay = styled.div`
  margin: auto;
`;

const StLetterFormInput = styled.input`
  padding: 5px;
  width: 900px;
`;

const StLetterFormTextArea = styled.textarea`
  padding: 5px;
  margin-top: 10px;
  width: 900px;
  height: 400px;
`;

const StLetterFormOption = styled.div`
  margin-left: 750px;
  margin-top: 10px;
`;

const StLetterFormOptionButton = styled.button`
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
