import React from "react";
import { useState } from "react";



function Hairs(){
const [hairs, setHairs] = useState(0);
var hairNames = [
    'hair-0',
    'hair-1',
    'hair-2',
    'hair-3'
    
    
]; 
  var hairCollection = [
    {url: "http://localhost:3000/none.png"},
    { url: "http://localhost:3000/hair1.png"},
    { url: "http://localhost:3000/hair2.png" },
    { url: "http://localhost:3000/newhair1.png"},
   
    
]; 



function Prev(){
   //if(Current == 0){
   //     Current = text.length - 1;}
    //else{
      //  Current--;}
      if(hairs === 0){
        setHairs(hairs + 3)
      }
        else{
          setHairs(hairs -1)

        }
      
     

}


function Next(){
  if(hairs > 2 ){
    setHairs(hairs - 3)
  }
    else{
      setHairs(hairs + 1)

    }
  //  if(Current == text.length - 1){
    //    Current = 0}
 //   else{
      //  Current++;}

      
}

    return<>       <div>
    <div id="textHere" ><img src ={hairCollection[hairs].url} className ="hair" alt="hair" id="my-section"></img>
    
    </div>
    <div>
      
    <button onClick={Prev}><i class="fa-solid fa-chevron-left"></i></button><span>{hairNames[hairs]}</span>
   <button onClick={Next}> <i class="fa-solid fa-chevron-right"></i> </button>

   
    </div>
  </div></>
};
  export default Hairs;