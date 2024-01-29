import { styled } from "styled-components";

/**
 *  아티스트별 팬레터를 보여주는 버튼
 **/
export const LetterPostViewButton = styled.div`
  .button_post_view {
    margin: 10px;
  }

  .button_post_view > button {
    margin: 10px;
    border-color: #212529;
    background-color: #212529;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
  }

  .button_post_view > button:hover {
    cursor: pointer;
    background-color: #4d5154;
  }
`;

/** 팬 레터 카드 */
export const LetterCard = styled.figure`
  figure.letter_card {
    background-color: #141514;
    margin: 10px;
    display: flex;
    border-radius: 10px;
    color: #eff2ef;
  }

  figure.letter_card img {
    margin: 10px;
    border-radius: 50%;
  }

  /* card content */
  p.letter_card_content {
    margin: 15px;
  }

  /* card 버튼 */
  p.letter_card_detail_button > button {
    margin-left: 1500px;
    border-color: black;
    background-color: black;
    color: #eff2ef;
    padding: 10px;
    border-radius: 5px;
  }

  p.letter_card_detail_button > button:hover {
    background-color: transparent;
  }
`;

// Letter 헤더
export const LetterHeaderStyle = styled.header`
  header {
    font-size: 20px;
    background-color: #141513;

    text-align: center;
    background-size: auto;
  }

  header h1 {
    color: white;
  }
`;

// 다이나믹 라우팅으로  띄운  카드 있지 않습니까
// 그거 공통스타일로 적용했습니다
export const LetterDetailCard = styled.div`
  div {
    background-color: black;
    color: white;
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
  }

  div > .letter_detail_text {
    display: flex;
    justify-content: space-between;
  }

  div > .letter_detail_content {
    background-color: white;
    color: black;
    height: 200px;
  }

  div > .letter_detail_content_edit {
    width: 1800px;
    height: 200px;
  }

  div > .detail_option_buttons {
    margin-left: 1550px;
  }

  div > .detail_option_buttons > button {
    margin: 10px;
  }

  div > .detail_option_buttons > .content_edit_save,
  div > .detail_option_buttons > .content_edit_cancel {
    padding: 10px;
  }

  div > .detail_option_buttons > .content_edit_save {
    border-color: #0b69d4;
    background-color: #0b69d4;
    color: white;
    border-radius: 5px;
  }

  div > .detail_option_buttons > .content_edit_save:hover {
    background-color: #0680c2;
    border-color: #0680c2;
    cursor: pointer;
  }

  div > .detail_option_buttons > .content_edit_cancel {
    background-color: #141513;
    background-color: #141513;
    color: white;
    border-radius: 5px;
  }

  div > .detail_option_buttons > .content_edit_cancel:hover {
    background-color: #181719;
    border-color: #181719;
    cursor: pointer;
  }
`;
