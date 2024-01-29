import { createGlobalStyle } from "styled-components";

// Letter 헤더
export const LetterHeader = createGlobalStyle`
header{
   background-color: aliceblue;
}    
`;

// Letter 입력 폼
export const LetterForm = createGlobalStyle`

form{
    margin-left: 700px;
  }
  
  input{
    margin: 10px;
    padding: 10px;
}  
  
select{
    margin: 10px;
    padding:10px;
}

form > button{
    margin: 10px;
    padding: 10px;
    border-color:#0b69d4;
    background-color: #0b69d4;
    border-radius: 10px;
    color: white;
}


form > button:hover{
    background-color: #0b69d4;
    cursor: pointer;
}

  `;

// Letter 카드
export const LetterCard = createGlobalStyle`
  figure.letter_card{
    background-color: #141514;
  margin: 10px;
  display: flex;
  border-radius: 10px;
  color: #eff2ef;
  }


 figure.letter_card img{
    margin: 10px;
    border-radius: 50%;
 }



  /* card content */
  p.letter_card_content{
        margin: 15px;
    }


    /* card 버튼 */
    p.letter_card_detail_button > button{
        margin-left:1600px;
        border-color: black;
        background-color: black;
        color: #eff2ef;
        padding:10px;
        border-radius: 5px;
    }

    p.letter_card_detail_button > button:hover{
        
        background-color: transparent;
    }

`;

// Letter 카드뷰
export const LetterPostViewButton = createGlobalStyle`
 
 .button_post_view{
    margin-left: 1700px;
 }



    .button_post_view>button{
      margin: 10px;
      border-color: black;
      background-color: black;
      color: white;
    }


`;
