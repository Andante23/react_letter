import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  deleteZanNaBiLetter,
  updateZanNaBiLetter,
} from "store/modules/znbFanLetter";
import {
  StLetterCard,
  StLetterText,
  StLetterCardOptionButton,
  StLetterCardSave,
  StLetterCardCancel,
  StLetterCardDelete,
  StLetterCardUpdate,
} from "../style/LogicalStyle";

// Detail 잔나비 레터 상세페이지 컴포넌트
const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState();
  const letterData = useSelector((state) => state.zaNaBiLetter);

  const dispatch = useDispatch();

  const handleSave = () => {
    const isUpdate = window.confirm("수정하시겠습니까?");

    if (isUpdate === true) {
      dispatch(updateZanNaBiLetter({ id, editedContent }));
      setIsEditing(false);
      navigate("/");
    } else {
      setIsEditing(true);
    }
  };

  const handleDelete = (id) => {
    // 삭제 validation 체크
    const isDelete = window.confirm("삭제하시겠습니까?");
    if (isDelete === true) {
      dispatch(deleteZanNaBiLetter(id));
      navigate("/");
    } else {
      return;
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <>
      {/* 
      useParam을 이용하여 받은 id값을 통해 필터링 된 새 배열을 
      map으로 통해 뿌려준것   
    
    */}
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
                    required
                  >
                    {LD.content}
                  </StLetterText>
                ) : (
                  <StLetterText>{LD.content}</StLetterText>
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

export default Detail;
