import React, {useState} from 'react'

// Child component that receives a function prop
const Button = React.memo(({ onClick, text }) => {
  alert(`Child ${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

function Without(){
  const[count1, setcount1]=useState(0)
  const[count2, setcount2]=useState(0)

  function handleClick1(){
    // alert(`Count1 button rendered`);
    console.log(count1)
    setcount1(count1+1)
  }

  function handleClick2(){
    // alert(`Count2 button rendered`);
    console.log(count2)
    setcount2(count2+1)
  }

  alert("Parent rendered");
  return (
    <>
    <h1>Without callback</h1>
    <h1>{count1}</h1>
    <h1>{count2}</h1>
{/*    <button onClick={handleClick1}>Click me for count1</button>
    <button onClick={handleClick2}>Click me for count2</button>*/}
    <Button onClick={handleClick1} text="Button 1" />
    <Button onClick={handleClick2} text="Button 2" />
    </>
  )
}
export default Without;