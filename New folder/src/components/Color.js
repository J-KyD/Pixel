import React from "react";
import pic from '../face.png'

function Color(){

    function changeColor(){
        
        let color = document.getElementById('getColor').value;
       document.getElementById("my-section").style.backgroundColor = color;
        console.log(color);

    }
return<>
             <div className='hello' >
              
              <img src ={pic} className ="img" alt="main" id="my-section"></img>  
              </div>
              <input type="color" id="getColor" className="print" ></input><br></br>
  <button id="buttoncolor" onClick={changeColor} className="print">Get Value</button>
            
              <button onClick={window.print} className ="print"> Print</button>
</>
  
}


export default Color;