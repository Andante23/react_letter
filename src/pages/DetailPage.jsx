import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FanLetterDataContext } from "context/LetterDataContext";
import { useContext } from "react";

const DetailPage = () => {
  /*  
    id : 다이나믹 라우팅에서 받은 id값   
    navigate :  Home페이지로 이동
    isEditing : 수정모드 활성화 / 비활성화 
    editedContent : 수정된는 글 말하는 거임 
  */
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState();

  // context에서 받아온데이터인 data를  비구조화 할당을 이용해서 필요한 데이터만 가져오기
  const data = useContext(FanLetterDataContext);
  const { setLetterData, letterData } = data;

  /*
   handleUpdate : 글 수정하는 함수
   handleDelete : 글 삭제하는 함수
   handleEdit : 수정모드 활성화
   handleCancelEdit : 수정모드 비활성화 
 */
  const handleEdit = () => setIsEditing(true);

  const handleUpdate = () => {
    //  23처럼 setEditedContent에 다가만 알리면 리액트는  무엇이 바뀌었는가 ???만 띄움니다.
    //  까먹지말고  전체 데이터를 다루는  LetterData에다가 알려줍시다!!

    setLetterData((prevLetterData) => {
      const updatedData = prevLetterData.map((letter) =>
        letter.id === id ? { ...letter, content: editedContent } : letter
      );
      return updatedData;
    });

    // 수정사항까지 반영되었는데 활성화되면.... ???? 띄움니다
    setIsEditing(false);

    // 아 그럼 이제 Home 라우터에 보이게 합시다.
    navigate("/");
  };

  const handleCancelEdit = () => setIsEditing(false);

  const handleDelete = () => {
    const resultDelete = window.confirm("삭제하시겠습니까?");
    if (resultDelete) {
      setLetterData((prevLetterData) =>
        prevLetterData.filter((letter) => letter.id !== id)
      );
      alert("성공적으로 삭제되었습니다.");

      navigate("/");
    } else {
      alert("삭제가 취소되었습니다.");
    }
  };

  return (
    <>
      {/* 특정사람의 id에 따른 상세 팬레터 정보를 보여주는 로직 */}
      {letterData
        .filter((letter) => letter.id === id)
        .map((letter) => {
          return (
            <>
              <div>
                <StLetterCard>
                  <b>{letter.nickname}</b>

                  <b>{letter.createdAt}</b>
                </StLetterCard>
                {isEditing ? (
                  <StLetterText
                    value={editedContent}
                    onChange={(e) => {
                      setEditedContent(e.target.value);
                    }}
                  >
                    {letter.content}
                  </StLetterText>
                ) : (
                  <p>{letter.content}</p>
                )}

                <StLetterCardOptionButton>
                  {isEditing ? (
                    <>
                      <StLetterCardSave onClick={handleUpdate}>
                        저장하기
                      </StLetterCardSave>
                      <StLetterCardCancel onClick={handleCancelEdit}>
                        취소하기
                      </StLetterCardCancel>
                    </>
                  ) : (
                    <>
                      <StLetterCardDelete onClick={handleDelete}>
                        삭제하기
                      </StLetterCardDelete>
                      <StLetterCardUpdate onClick={handleEdit}>
                        수정하기
                      </StLetterCardUpdate>
                    </>
                  )}
                </StLetterCardOptionButton>
              </div>
            </>
          );
        })}
    </>
  );
};

export default DetailPage;

const StLetterCard = styled.p`
  display: flex;
  justify-content: space-around;
`;

const StLetterText = styled.textarea`
  width: 900px;
  height: 100px;
  margin-top: 40px;
  margin-left: 450px;
`;

const StLetterCardOptionButton = styled.div`
  margin-left: 1200px;
  margin-top: 10px;
`;

const StLetterCardSave = styled.button`
  margin-right: 10px;
  border-radius: 5px;
`;
const StLetterCardCancel = styled.button`
  border-radius: 5px;
`;

const StLetterCardDelete = styled.button`
  margin-right: 10px;
  border-radius: 5px;
`;
const StLetterCardUpdate = styled.button`
  border-radius: 5px;
`;
