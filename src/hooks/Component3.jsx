import {useContext} from 'react'
import {UserContext} from './Global'

function Component3() {
  const user=useContext(UserContext)
  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user.user} again!`}</h2>
      <button onClick={()=>user.setUser("Victory")}>Changed name from component-3</button>
    </>
  );
}
export default Component3;