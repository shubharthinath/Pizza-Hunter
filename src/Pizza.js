import React from 'react';
import './pizza.css'

let Pizza = (props) => {
  
  let pizzaPlacesList = props.pizzaPlaces.length ? (props.pizzaPlaces.map( (pizzaPlace) => {
    console.log(pizzaPlace);

    return(
    <div className='pizza' key={pizzaPlace.id}>
      <h1>{pizzaPlace.name}</h1>
        <p className='para'>{pizzaPlace.desc.toUpperCase()}</p>
        <button>{pizzaPlace.link}</button>
        <br></br>
        <button onClick={()=>{props.deleteCard(pizzaPlace.id)}}>Delete Card</button>
    </div>    
    )
  }
)) : (<p>No data available..</p>)

  console.log(pizzaPlacesList);
  return(
    //always enclose adjacent jsx in a div
    <div>
      {pizzaPlacesList}
    </div>
  )
}
  export default Pizza;