import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailPage = ({ letterData, setLetterData }) => {
  /*
    id : 다이나믹 라우팅에서 받은 id값   
    navigate :  Home페이지로 이동
    isEditing : 수정모드 활성화 / 비활성화 
    editedContent : 수정된는 글 말하는 거임 
    letterData :   전체 팬 레터 데이터
    dispatch : 삭제와 수정 할려고 사용한거임 
  */
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState();

  /*
   handleSave : 글 수정하는 함수
   handleDelete : 글 삭제하는 함수
   handleEdit : 수정모드 활성화
   handleCancelEdit : 수정모드 비활성화 
  */
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const isUpdate = window.confirm("수정하시겠습니까?");

    if (isUpdate === true) {
      setLetterData((prevLetterData) => {
        const updatedData = prevLetterData.map((letter) =>
          letter.id === id ? { ...letter, content: editedContent } : letter
        );
        return updatedData;
      });
    } else {
      setIsEditing(true);
    }

    setIsEditing(false);

    navigate("/");
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const deleteButton = () => {
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
      {letterData
        .filter((lD) => lD.id === id)
        .map((LD) => {
          return (
            <>
              <div>
                <StLetterCard>
                  <b>{LD.nickname}</b>

                  <b>{LD.createdAt}</b>
                </StLetterCard>
                {isEditing ? (
                  <StLetterText
                    value={editedContent}
                    onChange={(e) => {
                      setEditedContent(e.target.value);
                    }}
                  >
                    {LD.content}
                  </StLetterText>
                ) : (
                  <StLetterText disabled>{LD.content}</StLetterText>
                )}

                <StLetterCardOptionButton>
                  {isEditing ? (
                    <>
                      <StLetterCardSave onClick={handleSave}>
                        저장하기
                      </StLetterCardSave>
                      <StLetterCardCancel onClick={handleCancelEdit}>
                        취소하기
                      </StLetterCardCancel>
                    </>
                  ) : (
                    <>
                      <StLetterCardDelete onClick={deleteButton}>
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
