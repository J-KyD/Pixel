import React from "react";
import { useState } from "react";



function Eyes(){
const [eyes, setEyes] = useState(0);
var eyeNames = [
  'eyes-0',
  'eyes-1',
  'eyes-2',
  'eyes-3'
  
  
]; 
var eyeCollection = [
  {url: "http://localhost:3000/none.png"},
  { url: "http://localhost:3000/eyes.png" },
  { url: "http://localhost:3000/eyes2.png" },
  { url: "http://localhost:3000/eyes3.png" },
 
  
]; 



function Prev(){
   //if(Current == 0){
   //     Current = text.length - 1;}
    //else{
      //  Current--;}
      if(eyes === 0){
        setEyes(eyes + 3)
      }
        else{
          setEyes(eyes -1)

        }
      
     

 
}


function Next(){
  if(eyes > 2 ){
    setEyes(eyes - 3)
  }
    else{
      setEyes(eyes + 1)

    }
  //  if(Current == text.length - 1){
    //    Current = 0}
 //   else{
      //  Current++;}

      
}

return<>       <div>
<div id="textHere" ><img src ={eyeCollection[eyes].url} className ="eyes" alt="eye" id="my-section"></img>

</div>
<div>
<button onClick={Prev}><i class="fa-solid fa-chevron-left"></i></button><span>{eyeNames[eyes]}</span>
<button onClick={Next}> <i class="fa-solid fa-chevron-right"></i> </button>
</div>
</div></>
};
  export default Eyes;