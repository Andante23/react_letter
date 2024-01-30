import { createGlobalStyle } from "styled-components";

// Letter 입력 폼
export const StLetterForm = createGlobalStyle`
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
}`;
