import {useRef, useState, useEffect} from 'react'

function Dom() {
  const[input, setInput]=useState("")
  const preInput=useRef("")
  const inputElement=useRef()

  useEffect(()=>{
    preInput.current=input;
    // console.log(preInput.current)
  },[input]);

  function handleInput(e){
    setInput(e.target.value)
  }

  function focusInput(){
    inputElement.current.focus()
  }

  return (
    <>
      <h1>It's useRef Dom component.</h1>
      <input ref={inputElement} value={input} onChange={handleInput} type="text"/>
      <button onClick={focusInput}>Focus Input</button>
      <h1>Current Value: {input}</h1>
      <h1>Previous value: {preInput.current}</h1>
    </>
  )
}
export default Dom;