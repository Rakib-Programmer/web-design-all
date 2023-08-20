import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name: 'Photoshop' price: '$90.99'}
    
  ]
  return (
    <div className="App">
      <header className="App-header">
         <p>I am a React person</p>
         <Product name="photoshop" price="$90.99"></Product>
         <Parson name="munna" job="footbol"></Parson>
         <Parson name="masum" job="dosak"></Parson>
         <Parson name= "Rakib" job="progmar"></Parson>
      </header>
    </div>
  );
}

function Product(props){
  const ProductStyle={
    border:'1px solid gray',
    borderRadius: '5px',
    height:'200px',
    width: '200px',
    backgroundColor:'lightgray',
    float:'left'

  }
  return(
    <div style={ProductStyle}>
      <h3>{props.name}</h3>
      <h4> {props.price} </h4>
      <button>buy now</button>
    </div>
  )
}

function Parson(props){
  const personstyle={
    border: '2px solid red ',
    margin:'20px'
  }
  return (
    <div style={ personstyle}>
      <h1>Name: {props.name }</h1>
      <h3>my professon: {props.job}</h3>
    </div>
  )
}

export default App;
