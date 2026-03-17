import {useReducer} from 'react'

const initialScore=[
  {
    id:1,
    name:"Ram",
    score:0
  },
  {
    id:2,
    name:"Shyam",
    score:0
  }
]

const reducer = (state, action)=>{
  // console.log(action)
  switch(action.type) {
    case "INCREASE":
      return state.map((player)=>{
        if(player.id === action.id){
          return {...player, score: player.score+1}
        }else{
          return player
        }
      })
    default :
      return state;
  }
}

function Score(){
  const[score, dispatch]=useReducer(reducer, initialScore)

  function handleIncrease(player){
    dispatch({type: "INCREASE", id: player.id})
  }

  return (
    <>
      <h1>We are in Score component using Reducer.</h1>
      {
        score.map((player)=>(
          <div key={player.id}>
            <label>
              <input
               type="button"
               value={player.name}
               onClick={()=>handleIncrease(player)}
               />
              {player.score}
            </label>
          </div>
        ))
      }
    </>
  )
}
export default Score;