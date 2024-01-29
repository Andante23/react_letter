import { LetterDetailCard, LetterForm } from "Style/GlobalStyle";
import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Detail = ({ setLetterData }) => {
  const { id } = useParams();

  // LetterBody에서 더 보기 ??? 이거 클릭하지 않습니까 . 거기에 자세히 보시면  데이터 있잖아요
  // 그 데이터 가져올려고 사용하였습니다.
  const location = useLocation();

  //  삭제 된것이 페이지에 반영이 되게 하기 위해서  navigate를 사용하였습니다.
  const navigate = useNavigate();

  // 어떤 글을 수정할때  에디터가 있지 않습니까 , 그 에디터입니다.
  // 처음에 들어갔는데 활성화되어 있으면  작성자가 좋아할까요
  const [isEditing, setIsEditing] = useState(false);

  // 수정하는것을  생각해보십쇼 , 게시판에서 수정할때  변경되지 않습니까 . 그러니 useState 씁시다.
  const [editedContent, setEditedContent] = useState(
    location.state.data.content
  );

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    //  20처럼 setEditedContent에 다가만 알리면 리액트는  무엇이 바뀌었는가 ???만 띄움니다.
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

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  /**
   *  게시글을 삭제하면 삭제한 것이  Home에 반영이 됩게끔 하는  삭제 함수입니다.
   */
  const deleteButton = () => {
    const resultDelete = window.confirm("삭제하시겠습니까?");
    if (resultDelete) {
      //console.log("Deleting with id:", id);
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
      <LetterDetailCard />
      <figure>
        <div className="letter_detail_text">
          <p>{location.state.data.nickname}</p>
          <p>{location.state.data.createdAt}</p>
        </div>
        <figcaption>
          {/* 수정 에디터가 활성화되면  */}
          {isEditing ? (
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            <>
              {/* 그게 아니라면 비활성화시키죠 */}
              <LetterDetailCard />
              <p className="letter_detail_content">
                {location.state.data.content}
              </p>
            </>
          )}
        </figcaption>
        <div className="letter_detail_button">
          {isEditing ? (
            <>
              {/* 수정 에디터가 활성화 , 즉 나는 지금 수정하고 있습니다입니다. */}
              <button onClick={handleSave}>저장하기</button>
              <button onClick={handleCancelEdit}>취소하기</button>
            </>
          ) : (
            // 비활성화되면  삭제 와 수정을 보여줍시다.
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
