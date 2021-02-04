import React from "react";

function Card(props)
{
    return (
        <div>
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <div className="centered">
        <h1>{props.title}</h1>
      </div>
          </div>
          <div className="flip-card-back">             
          <div className="centered">
        <h1>{props.defination}</h1>
      </div>            
          </div>
        </div>
      </div>
      </div>
      

)
  
}

export default Card;