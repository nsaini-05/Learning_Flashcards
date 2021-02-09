import React , {useState} from "react";
import Card from "./Card";





function CardsList()
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
    
    CardsList.insertCard = insertCard;
    
    return    <div className = "grid-container" >
  {cards.map((card , index)=>{
      return <Card title = {card.title} definition = {card.definition} deleteRequest = {deleteCard} key = {index} id = {index}/>
  })}
  </div>



}



function insertCardToCardList(card)
{

   CardsList.insertCard(card);

}






export default CardsList;


export {insertCardToCardList};
