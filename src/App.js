import React, { Component } from 'react';
import Addpizza from './addPizza';
import Pizza from './Pizza';

class App extends Component{
  state = {

  dynamicName:'Pizza Hunter',
  pizzaPlaces: [
      { name: 'PizzaHut', desc: 'Best pizza in town', link: <a href='https://www.pizzahut.co.in/' target="_blank" rel="noreferrer">visit</a>, id: 1},
      { name: 'Dominos', desc: 'Better than the best', link: <a href='https://www.dominos.co.in/' target="_blank" rel="noreferrer">visit</a>, id: 2},
      { name: "Papa John's", desc: 'We make good pizza', link: <a href='https://www.papajohns.com/order/menu' target="_blank" rel="noreferrer">visit</a>, id: 3},
      { name: 'OverStory', desc: 'authentic pizza', link: <a href='https://www.ovenstory.in/' target="_blank" rel="noreferrer">visit</a>, id: 4},
      { name: 'BurntBricks', desc: "finger lickin' good", link: <a href='https://pizzanova.com/' target="_blank" rel="noreferrer">visit</a>, id: 5}
  ]
}

addCard = (details) => {
  console.log(details);
  details.id=Math.floor(7+Math.random()*10);
  //spread operators: will copy the elements from the source(array,objects)
  this.setState({
    pizzaPlaces: [...this.state.pizzaPlaces, details]
  })
}

deleteCard = (id) =>{
  console.log(id);
  let pizzaPlaces=this.state.pizzaPlaces.filter( (pizzaPlace) => {
      return pizzaPlace.id !== id
  }
)
  this.setState({
    pizzaPlaces: pizzaPlaces
  });
}

  render(){
    
    return(
    <div>
      {<h1>{this.state.dynamicName}</h1> }
      <Pizza pizzaPlaces={this.state.pizzaPlaces} deleteCard={this.deleteCard}></Pizza>
      <Addpizza addCard={this.addCard}></Addpizza>
    </div>
    )
  }
}
export default App;
