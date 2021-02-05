import React , {useState} from "react";





function InputArea(props)
{
    const [card , setCard]  = useState({title : "" , definition :""});

    function handleClick(event)
    {
      {props.onCreated(card)}      
      event.preventDefault();
      setCard({title : "" , definition :""});            
    }


    function handleChange(event)
    {
            const newValue = event.target.value;
            const inputName = event.target.name;
            setCard(prevValue =>{              
              return({...prevValue , [inputName] : newValue});
            });
    }






    return <div className="container">

    
 
    <form>
      <input name="title" placeholder="Title" onChange = {handleChange} value = {card.title}/>
      <input name="definition" placeholder="Explanation" onChange = {handleChange}  value = {card.definition}/>
      <button onClick = {handleClick}>Submit</button>
    </form>
  </div>
}



export default InputArea;