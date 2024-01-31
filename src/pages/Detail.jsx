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
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  const letterData = useSelector((state) => state.zaNaBiLetter);
  const dispatch = useDispatch();

  const selectedLetter = letterData.find((lD) => lD.id === id);

  if (!selectedLetter) {
    // Handle the case when the letter with the given ID is not found
    return <p>Letter not found</p>;
  }

  const handleEdit = () => {
    setIsEditing(true);
    setEditedContent(selectedLetter.content);
  };

  const handleSave = () => {
    dispatch(updateZanNaBiLetter(id, editedContent));
    setIsEditing(false);
    navigate("/");
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteZanNaBiLetter(id));
    navigate("/");
  };

  return (
    <>
      <StLetterCard>
        <b>{selectedLetter.nickname}</b>
        <b>{selectedLetter.createdAt}</b>
      </StLetterCard>

      {isEditing ? (
        <StLetterText
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <p>{selectedLetter.content}</p>
      )}

      <StLetterCardOptionButton>
        {isEditing ? (
          <>
            <StLetterCardSave onClick={handleSave}>Save</StLetterCardSave>
            <StLetterCardCancel onClick={handleCancelEdit}>
              Cancel
            </StLetterCardCancel>
          </>
        ) : (
          <>
            <StLetterCardDelete onClick={handleDelete}>
              Delete
            </StLetterCardDelete>
            <StLetterCardUpdate onClick={handleEdit}>Edit</StLetterCardUpdate>
          </>
        )}
      </StLetterCardOptionButton>
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
