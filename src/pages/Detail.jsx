import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  //console.log(props);
  const { id } = useParams();
  const navigate = useNavigate();
  // const [isEditing, setIsEditing] = useState(false);
  // const [editedContent, setEditedContent] = useState();

  // // 에디터를  활성화 시켜주는 함수입니다.
  // const handleEdit = () => {
  //   setIsEditing(true);
  // };

  // const handleSave = () => {
  //   //  23처럼 setEditedContent에 다가만 알리면 리액트는  무엇이 바뀌었는가 ???만 띄움니다.
  //   //  까먹지말고  전체 데이터를 다루는  LetterData에다가 알려줍시다!!

  //   props.setLetterData((prevLetterData) => {
  //     const updatedData = prevLetterData.map((letter) =>
  //       letter.id === id ? { ...letter, content: editedContent } : letter
  //     );
  //     return updatedData;
  //   });

  //   // 수정사항까지 반영되었는데 활성화되면.... ???? 띄움니다
  //   setIsEditing(false);

  //   // 아 그럼 이제 Home 라우터에 보이게 합시다.
  //   navigate("/");
  // };

  // const handleCancelEdit = () => {
  //   setIsEditing(false);
  // };

  // const deleteButton = () => {
  //   const resultDelete = window.confirm("삭제하시겠습니까?");
  //   if (resultDelete) {
  //     props.setLetterData((prevLetterData) =>
  //       prevLetterData.filter((letter) => letter.id !== id)
  //     );
  //     alert("성공적으로 삭제되었습니다.");

  //     navigate("/");
  //   } else {
  //     alert("삭제가 취소되었습니다.");
  //   }
  // };

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

export default Detail;
