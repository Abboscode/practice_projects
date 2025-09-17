import { useState } from 'react'


import './App.css'
import Accordian from './components/accordian'
import RandomColor from "./components/random-color/index.jsx";
import StarRating from "./components/star-rating/index.jsx";
function App() {
  const [count, setCount] = useState(0)

  return(  <><Accordian></Accordian>
            <RandomColor></RandomColor>
            <StarRating noOfStars={7}></StarRating>
  </>)
  
  
}

export default App
