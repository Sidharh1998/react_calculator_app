
import './App.css';
import React,{useState} from 'react';
function App() {
let [num1,setNum1]=useState("")
let [num2,setNum2]=useState("")
let [result,setResult]=useState("")
let [error,setError]=useState("")
let [sucess,setSucess]=useState("")



//checking correct input  
  function validation(operator){
 if(num1==="" || num2==="")
 {
  console.log("Error :  input cannot be empty")
   setError("Error :  Num1 cannot be empty")
   setSucess("")
   setResult("")
 }
else{
  calulation(operator)
  setSucess("Success : Your result is shown above!")
  setError("")
}
}



// arithmetic operations
function calulation(operator){
if(operator==="+"){
  setResult(Number(num1)+Number(num2))
}
else if(operator==="-"){
  setResult(Number(num1)-Number(num2))
}
else if(operator==="*"){
  setResult(Number(num1)*Number(num2))
}
else if(operator==="/"){
  setResult(Number(num1)/Number(num2))
}

}




  return (
<div className='container'>
  <h1>React Calculator</h1>
  <br></br>
  <input onChange={(e)=>{setNum1(e.target.value) } } value={num1} type='text' placeholder='Num 1'></input>
  <br></br>
  <br></br>
   <br></br>
  
  <input onChange={(e)=>{setNum2(e.target.value) }}  value={num2} type='text' placeholder='Num 2'></input>
  <br></br>
  <br></br>
  <div className='row'>
    <button onClick={()=> validation("+")} className='btn'>+</button>
    <button onClick={()=> validation("-")} className='btn'>-</button>
    <button onClick={()=> validation("*")} className='btn'>*</button>
    <button onClick={()=> validation("/")} className='btn'>/</button>
   </div>
   <br></br>
   <br></br>
   <p>
  {result ? (
    <span>Result={result}</span>
  ) : (
    <span></span>
  )}
</p>
    <br></br>
    <br></br>
   <p className='error'>{error}</p>
   <p className='sucess' >{sucess}</p>
</div>
  );
}

export default App;
