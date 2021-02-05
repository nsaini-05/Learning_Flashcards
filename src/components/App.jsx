import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer"
import Card from "./Cards"
import InputArea from "./InputArea"


function App()
{
    const [cards , setCards] = useState([]);

    function insertCard(card)
    {
        setCards(preValue => {
            return ([...preValue , card]);
        });
    }

    function deleteCard(id)
    {
        setCards(preValue => {
            return preValue.filter((element , index)=>{
                return index !== id;
            })
        })
    }
    
    
    return <div><Header />
 <InputArea onCreated = {insertCard} />
<div className = "grid-container" >
  {cards.map((card , index)=>{
      return <Card title = {card.title} definition = {card.definition} deleteRequest = {deleteCard} key = {index} id = {index}/>
  })}

  </div>
  </div>




 
    
}



export default App;