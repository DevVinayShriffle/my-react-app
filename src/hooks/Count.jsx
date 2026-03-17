import {useState, useEffect} from 'react'

function Count(){
  const [count, setCount]=useState(0);
  const [bool, setBool]=useState(true)

  useEffect(()=>{
    let timer=setTimeout(()=>{
      setCount((count)=>count+1);
    },1000);
    return ()=>clearTimeout(timer)
  }, [bool]);

  function handleBool(){
    bool?setBool(false):setBool(true)
    console.log(bool)
  }

  return (
    <>
      <h1>I have rendered {count}.</h1>
      <button onClick={handleBool} >Click to toggle bool value </button>
    </>
  )
}
export default Count;