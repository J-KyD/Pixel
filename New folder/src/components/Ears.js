import React from "react";
import { useState } from "react";



function Ears(){
const [ears, setears] = useState(0);
var earNames = [
    'ears-0',
    'ears-1',
    'ears-2',
    'ears-3'
    
    
]; 
  var earCollection = [
    {url: "http://localhost:3000/none.png"},
    { url: "http://localhost:3000/ear1.png"},
    { url: "http://localhost:3000/ear2.png" },
    { url: "http://localhost:3000/ear3.png"},
   
    
]; 



function Prev(){
   //if(Current == 0){
   //     Current = text.length - 1;}
    //else{
      //  Current--;}
      if(ears === 0){
        setears(ears + 3)
      }
        else{
          setears(ears -1)

        }
      
     
}


function Next(){
  if(ears > 2 ){
    setears(ears - 3)
  }
    else{
      setears(ears + 1)

    }
      
}

    return<>       <div>
    <div id="textHere" ><img src ={earCollection[ears].url} className ="ear" alt="ears"id="my-section"></img>
    
    </div>
    <div>
    <button onClick={Prev}><i class="fa-solid fa-chevron-left"></i></button><span>{earNames[ears]}</span>
   <button onClick={Next}> <i class="fa-solid fa-chevron-right"></i> </button>
    </div>
  </div></>
};
  export default Ears;