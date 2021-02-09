import React , {useState} from "react";
import Header from "./Header";
import CardsList from "./CardsList";
import {insertCardToCardList} from "./CardsList"
import InputArea from "./InputArea"

function App()
{
    
    return <div><Header />
      <InputArea onCreated = {insertCardToCardList} />
       <CardsList />

  </div>




 
    
}



export default App;