import React from "react";
import Hairs from './Hair';
import Ears from "./Ears";
import Eyes from './Eyes'
import pic from '../face.png';
import Noses from "./Nose";
import Mouths from "./Mouth";

function Container(){

  
    

    return<div classname="container">
        <div className="row">

            <div className="col-6" id="picon">
            
             <div className='hello' >
              
  <img src ={pic} className ="img" alt="main" id="my-section"></img>  
  </div>
  <button onClick={window.print} className ="print"> Print</button>
 
  
 </div>
          <div className="col-6">
            <div className="row">
          <div className="col-4" >
            <div className="col-12" id="top">
            <h1>eyes</h1>
            </div>

            <div className="col-12" id="mid">
            <Eyes />   </div>
          
          </div>
          <div className="col-4">
            <div className="col-12" id="top">
            <h1>ears</h1>
            </div>

            <div className="col-12" id="mid">
            <Ears />   </div>
          
          </div>
          <div className="col-4" >
            <div className="col-12" id="top" >
            <h1>nose</h1>
            </div>

            <div className="col-12" id="mid">
            <Noses />   </div>
          
          </div>
          <div className="col-4">
            <div className="col-12" id="top">
            <h1>Lips</h1>
            </div>

            <div className="col-12" id="mid">
             <Mouths />
            </div>
          
          </div>
          <div className="col-4">
            <div className="col-12" id="top">
            <h1>hair</h1>
            </div>

            <div className="col-12" id="mid">
            <Hairs />  </div>
          
          </div>

           
          </div>


          </div>
     
        
        </div>
  
    </div>;
};

export default Container;
