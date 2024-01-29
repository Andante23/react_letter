import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export const LetterBody = ({
  nickName,
  setNickName,
  content,
  setContent,
  selectValue,
  setSelectorValue,
  letterData,
  setLetterData,
}) => {
  const navigate = useNavigate();

  /**
   * 입력 nickName 값 저장하는 함수
   */
  const onChangeNickName = (event) => {
    setNickName(event.target.value);
  };

  /**
   * 입력 content 값 저장하는 함수
   */
  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  /**
   * selectBox에서 선택한 option 값을 저장하는 함수
   */
  const onChangeSelect = (event) => {
    setSelectorValue(event.target.value);
  };

  /**
   *  입력폼을 제출하는 함수
   */

  const onSubmitInputForm = (event) => {
    event.preventDefault();

    const date = new Date();

    setLetterData((prevLetterData) => [
      ...prevLetterData,
      {
        createdAt: date.toISOString(),
        nickname: nickName,
        avatar:
          "https://t1.kakaocdn.net/together_image/common/avatar/avatar.png",
        content: content,
        writedTo: selectValue,
        id: uuidv4(),
      },
    ]);
  };

  /**
   *  최정훈 버튼을 클릭하면   최정훈에 부합하는 게시물을 보여주는 함수
   */
  const onClickArtistViewPostButton = (selectValue) => {
    setSelectorValue(selectValue);
  };

  return (
    <>
      <form onSubmit={onSubmitInputForm}>
        <input
          type="text"
          name="nickname"
          value={nickName}
          onChange={onChangeNickName}
          required
        />
        <input
          type="text"
          name="content"
          value={content}
          onChange={onChangeContent}
          required
        />
        <select name="zanabi" onChange={onChangeSelect} value={selectValue}>
          <option value="최정훈">최정훈</option>
          <option value="김도형">김도형</option>
        </select>
        <button type="submit">추가하기</button>
      </form>

      <div>
        <button
          key="choi"
          onClick={() => onClickArtistViewPostButton("최정훈")}
        >
          최정훈
        </button>
        <button key="kim" onClick={() => onClickArtistViewPostButton("김도형")}>
          김도형
        </button>
      </div>

      {/* 
          letterData 배열에서  writedTo(누구에게) 와  위에서 버튼으로 선택한 사람이 일치한 것을  새 배열로 만들어줍니다

          map으로 돌려서 데이터를  뿌려줍니다. 
      */}
      {letterData
        .filter((letter) => letter.writedTo === selectValue)
        .map((lD) => (
          <div key={lD.id}>
            <img src={lD.avatar} alt="" />
            <p>{lD.nickname}</p>
            <p>{lD.content}</p>

            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                // 동적 라우팅이 되는 detail페이지에  state를 전달합니다
                navigate(`/detail/${lD.id}`, { state: { data: lD } });
              }}
            >
              더 보기{lD.writedTo}
            </span>
          </div>
        ))}
    </>
  );
};
