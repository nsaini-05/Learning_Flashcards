import React , {useState} from "react";

function Card(props)
{


  const[isClicked , setClicked] = useState(false);

  function handleClick()
  {
    {props.deleteRequest(props.id)}
  }

  function cardClick()
  {
    setClicked(prevValue => {return !prevValue});
  }  

    return (
        
        <div className="flip-card" name = "button" onClick = {cardClick}>
        <div className = {(isClicked) ? "flip-card-inner-rotated" : "flip-card-inner"}>
          <div className="flip-card-front">
         
  <span className = "delete-card" onClick = {handleClick} name = "cross">X</span>

          <div className="centered">
        <h1>{props.title}</h1>
      </div>
          </div>
          <div className="flip-card-back">             
          <div className="centered">
        <h1>{props.definition}</h1>
      </div>            
          </div>
        </div>
      </div>
      
      

)
  
}

export default Card;