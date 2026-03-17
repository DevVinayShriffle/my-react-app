import {useState} from 'react'

function Color() {
  const [color, setColor]=useState({
    input:"",
    divColor:"white"
  });

  function handleInput(e){
    const {name, value} = e.target;
    setColor((preData)=>({...preData, [name]: value}))
  }

  function handleDiv(){
    console.log(color)
    const{input, divColor} = color;
    setColor((preData)=>({...preData, divColor: input}))
    // console.log(color)
  }

  return (
    <>
      <div style={{height:"100px",width:"100px",backgroundColor:color.divColor, margin: "auto"}}></div>
      <input name="input" onChange={handleInput} type="text"/>
      <button onClick={handleDiv}>Click me to set color</button>
    </>
  )
}
export default Color;