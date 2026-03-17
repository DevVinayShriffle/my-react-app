// import Car from './props/Car'
import Form from './props/Form'
import Modal from './props/Modal'
import { useState } from 'react';
import { Suspense, lazy } from 'react';
import './assets/Style.css'
import btn from './assets/Button.module.css'
import Nav from './props/Nav'
const Car = lazy(()=>(import('./props/Car')))
import {Routes, Route} from 'react-router-dom'
import Home from './props/Home'
import Service from './props/Service'
import Help from './props/Help'
import About from './props/About'
import Product from './props/Product'
import BikeProducts from './props/BikeProducts'
import CarProducts from './props/CarProducts'
import Info from './props/Info'
import NotFound from './props/NotFound'
import Color from './hooks/Color'
import Count from './hooks/Count'
import Global from './hooks/Global'
import Component2 from './hooks/Component2'
import Component3 from './hooks/Component3'
import Render from './hooks/Render'
import Dom from './hooks/Dom'
import Score from './hooks/Score'
import Without from './hooks/Without'
import With from './hooks/With'
import WithoutMemo from './hooks/WithoutMemo'
import WithMemo from './hooks/WithMemo'
import SuperherosData from'./hooks/SuperherosData'
 
function App() {
  const [open, setOpen ] = useState(false)
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <div>
      {/*<div>
        <h1 style={{color: "red", backgroundColor: "green"}}>Hello World</h1>
        <Suspense fallback={<div>Loading Car...</div>}>
          <Car name="Tata Suv" color="Red" cars={cars} />
        </Suspense>
        <Form />

        <button className={btn.mybutton} onClick={()=>{setOpen(true)}}>Open modal</button>

        <button className={btn.primary}>
          My Primary Button
        </button>

        <button className={btn.secondary}>
          My Secondary Button
        </button>

        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <h2>Modal Content</h2>
          <p>This content is rendered outside the App component!</p>
        </Modal>
      </div>

      {/*Navbar*/}
      <Nav />

      {/*Routing*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:firstname" element={<Info />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Product />} >
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>

        <Route path="/hooks">
          <Route path="state" element={<Color />} />
          <Route path="effect" element={<Count />} />
          <Route path="context" element={<Global />} >
            <Route path="com-2" element={<Component2 />} />
            <Route path="com-3" element={<Component3 />} />
          </Route>
          <Route path="ref" element={<Render />} >
            <Route path="dom" element={<Dom />} />
          </Route>
          <Route path="reducer" element={<Score />} />
          <Route path="callback">
            <Route path="without" element={<Without />} />
            <Route path="with" element={<With />} />
          </Route>
          <Route path="memo">
            <Route path="without" element={<WithoutMemo />} />
            <Route path="with" element={<WithMemo />} />
          </Route>
          <Route path="api" element={<SuperherosData />} />
        </Route>

        {/* Catch-all Route: Placed last */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App;

/* useState, useReducer, useEffect, useContext, useRef, (useCallback, useMemo) */