import { useState } from 'react'
import './App.css'

function Cientistas(){
    return(
      <img 
      src='https://s.ebiografia.com/img/de/sc/descobertas_grandes_cientistas_historia_f_ll.jpg' alt="cientista"
      className='logo react' 
      />
    );
}

function Button(){
  const [count, setCount] = useState(0);
  function clickButton(){
    return setCount(count+1);
  }
  return(
    <button onClick={clickButton}>quantidade de clicks: {count}</button>
  );

}

export default function App() {
  
  return(
    <div>
      <h1 >Titulo Teste</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laborum placeat ratione ducimus in suscipit perferendis quidem cum, fuga inventore rerum. Similique cum iste, culpa molestiae odio optio perferendis tenetur.</p>
      <Cientistas />
      <br />
      <Button />
      <br />
      <Button />
      
    </div>
  );
}

