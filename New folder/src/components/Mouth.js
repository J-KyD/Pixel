import React from "react";
import { useState } from "react";



function Mouths(){
  const [mouth, setMouths] = useState(0);
var mouthNames = [
    'Lips-1',
    'Lips-2',
    'Lips-3'
    
    
]; 
  var mouthCollection = [

    { url: "http://localhost:3000/mouth1.png", title: "beach" },
    { url: "http://localhost:3000/mouth2.png", title: "boat" },
    { url: "http://localhost:3000/mouth3.png", title: "forest" },
   
    
]; 



function Prev(){
   //if(Current == 0){
   //     Current = text.length - 1;}
    //else{
      //  Current--;}
      if(mouth === 0){
        setMouths(mouth + 2)
      }
        else{
          setMouths(mouth -1)

        }
}


function Next(){
  if(mouth > 1 ){
    setMouths(mouth - 2)
  }
    else{
      setMouths(mouth + 1)

    }    
}


    return<>       <div>
    <div id="textHere" ><img src ={mouthCollection[mouth].url} className ="mouth" alt="mouth" id="my-section" ></img>
    
    </div>
    <div>
    <button onClick={Prev}><i class="fa-solid fa-chevron-left"></i></button><span>{mouthNames[mouth]}</span>
   <button onClick={Next}> <i class="fa-solid fa-chevron-right"></i> </button>
    </div>
  </div></>
};
  export default Mouths;