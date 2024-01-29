import { createGlobalStyle } from "styled-components";

// Letter 입력 폼
export const LetterForm = createGlobalStyle`
form{
    margin-left: 700px;
  }
  
 input{
   margin-bottom: 10px;
   width: 500px;
 }

 textarea{
   width: 500px;
   height:200px;
 }


select{
    margin: 10px;
    padding:10px;
}

form  > div {
  margin-left: 320px;
}



form  > div > button{
    margin: 10px;
    padding: 10px;
    border-color:#0b69d4;
    background-color: #0b69d4;
    border-radius: 10px;
    color: white;
}


form >div  > button:hover{
    background-color: #0680c2;
    border-color: #0680c2;
    cursor: pointer;
}

  `;
