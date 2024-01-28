import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Detail = ({ letterData, setLetterData }) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(
    location.state.data.content
  );

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setLetterData((prevLetterData) => {
      const updatedData = prevLetterData.map((letter) =>
        letter.id === id ? { ...letter, content: editedContent } : letter
      );
      return updatedData;
    });

    setIsEditing(false);

    navigate("/");
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const deleteButton = () => {
    const resultDelete = window.confirm("삭제하시겠습니까?");
    if (resultDelete) {
      console.log("Deleting with id:", id);
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
      <figure>
        <div>
          <p>{location.state.data.nickname}</p>
          <p>{location.state.data.createdAt}</p>
        </div>
        <figcaption>
          {isEditing ? (
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            <p>{location.state.data.content}</p>
          )}
        </figcaption>
        <div>
          {isEditing ? (
            <>
              <button onClick={handleSave}>저장하기</button>
              <button onClick={handleCancelEdit}>취소하기</button>
            </>
          ) : (
            <>
              <button onClick={deleteButton}>삭제하기</button>
              <button onClick={handleEdit}>수정하기</button>
            </>
          )}
        </div>
      </figure>
    </>
  );
};

export default Detail;
