


import './App.css'
import Accordian from './components/accordian'
import RandomColor from "./components/random-color/index.jsx";
import StarRating from "./components/star-rating/index.jsx";
import ImageSlider from "./components/image-slider/index.jsx";
function App() {


  return(  <><Accordian></Accordian>
            <RandomColor></RandomColor>
            <StarRating noOfStars={7}></StarRating>
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={1}></ImageSlider>
  </>)
  
  
}

export default App
