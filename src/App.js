import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const nayoks = ['Anowar', 'Jafor', 'Jasim', 'Imran', 'Halka Khan']

const product = [
      {name:'Photoshop', price:'$90.99'},
      {name:'Illustrator', price:'$60,99'}, 
      {name:'Adove Reader', price:'$10.10'},
      {name:'Adove Indesign', price:'$120.22'}
]
  return (
    <div className="App">
      <header className="App-header">
        <p> I Am React Person</p>

        <Counter></Counter>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            product.map(product => <li>{product.name}</li>)
          }
          {
            product.map(pd =><Product product ={pd}></Product>)
          }
           
        </ul>
      </header>
    </div>
  );
}

function Counter(){
  const[count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);

  
  return(

    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
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
