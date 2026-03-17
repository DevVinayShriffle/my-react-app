import {useState, createContext} from 'react'
import {Outlet} from 'react-router-dom'
// import Component2 from './Component2'

export const UserContext=createContext();

function Global() {
  const [user, setUser] = useState("Linus");
  const value={user, setUser}
  return (
    <>
      <UserContext.Provider value={value} >
        <h1>Hello, {user} from Global component.</h1>
        <Outlet/>
        {/*<Component2 user={user} />*/}
      </UserContext.Provider >
    </>
  )
}
export default Global;