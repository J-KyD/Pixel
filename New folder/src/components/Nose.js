import React from "react";
import { useState } from "react";



function Noses(){
const [noses, setnoses] = useState(0);
var noseNames = [
    'nose-0',
    'nose-1',
    'nose-2',
    'nose-3'
    
    
]; 
  var noseCollection = [
    {url: "http://localhost:3000/none.png"},
    { url: "http://localhost:3000/nose.png"},
    { url: "http://localhost:3000/nose2.png"},
    { url: "http://localhost:3000/nose3.png"},
   
    
]; 



function Prev(){
   //if(Current == 0){
   //     Current = text.length - 1;}
    //else{
      //  Current--;}
      if(noses === 0){
        setnoses(noses + 3)
      }
        else{
          setnoses(noses -1)

        }
}


function Next(){
  if(noses > 2 ){
    setnoses(noses - 3)
  }
    else{
      setnoses(noses + 1)

    }
  //  if(Current == text.length - 1){
    //    Current = 0}
 //   else{
      //  Current++;}
console.log(noses);
      
}

    return<>       <div>
    <div id="textHere" ><img src ={noseCollection[noses].url} className ="nose" alt="nose" id="my-section"></img>
    
    </div>
    <div>
    <button onClick={Prev}><i class="fa-solid fa-chevron-left"></i></button><span>{noseNames[noses]}</span>
   <button onClick={Next}> <i class="fa-solid fa-chevron-right"></i> </button>
    </div>
  </div></>
};
  export default Noses;