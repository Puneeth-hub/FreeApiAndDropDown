import { useState } from 'react'
import Message from './Message'
import './App.css' 


function App(){
  const [count, setCount] = useState(2);
  

const handClickButton = ()=>{
  const valueUpate=document.getElementById('clickOnIt');
  setCount(parseInt(valueUpate.value))
}



  
  

  

  return(
     <div className='app-container'>
      <h1 className="heading-title">Spacx is our product and to find query from graphQL</h1>
      <div>
        <p className='drop-head'>Select Limit:</p>
        <select className="select-value" id='clickOnIt' >
          <option value={2}>2</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <button type='button' className='button' onClick={handClickButton}>Enter</button>
      </div>
      <Message count={count}/>
     </div>
  )
}

export default App;

