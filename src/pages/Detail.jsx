import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  deleteZanNaBiLetter,
  updateZanNaBiLetter,
} from "store/modules/znbFanLetter";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 수정모드는  첫번째에는 비활성화
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState();

  const letterData = useSelector((state) => state.zaNaBiLetter);

  // 팬레터 내용을 변경하고 , 삭제한 것을 반영하기 위해서 사용함
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateZanNaBiLetter({ id, editedContent }));
    setIsEditing(false);
    navigate("/");

    if (editedContent === "") {
      alert("안을 비울수 없습니다.");
      return;
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteZanNaBiLetter(id));
    navigate("/");
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
                  <p>{LD.content}</p>
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
                      <StLetterCardDelete
                        onClick={() => {
                          handleDelete(LD.id);
                        }}
                      >
                        삭제하기
                      </StLetterCardDelete>
                      <StLetterCardUpdate
                        onClick={() => {
                          handleEdit(LD.content);
                        }}
                      >
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

const StLetterCard = styled.p`
  display: flex;
  justify-content: space-around;
`;

const StLetterText = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  margin-left: 20px;
`;

const StLetterCardOptionButton = styled.div`
  margin-left: 20px;
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

export default Detail;
