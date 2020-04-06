import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const nayoks = ['Anowar', 'Jafor', 'Jasim', 'Salman']

const product = [
      {name:'Photoshop', price:'$90.99'},
      {name:'Illustrator', price:'$60,99'}, 
      {name:'Adove Reader', price:'$10.10'}

]
  return (
    <div className="App">
      <header className="App-header">
        <p> I Am React Person</p>
        <Product product={product[0]}> </Product>
        <Product product={product[1]}></Product>
        <Product product={product[2]}></Product>

        <Person name={nayoks[0]} nayika="Mousumi"></Person>
        <Person name="Jasim" nayika="Shabana"></Person>

        <Person name="Bappara" nayika="sobnom"> </Person>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }

  const {name, price} = props.product;
  console.log(name, price)
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      
      <button>Buy now</button>
    </div>
  )
}

function Person(props){

    const personStyle={
      border:'2px solid red',
      margin:'10px'
    }
  return(
    <div style={personStyle}>
      <h2>Nayok :{props.name}</h2>
      <h3>Hero of {props.nayika}</h3>
    </div>
  )
}

export default App;
