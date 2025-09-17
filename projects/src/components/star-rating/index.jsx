import {FaStar} from "react-icons/fa";
import {useState} from "react";
import "./styles.css"
export default function StarRating({noOfStars = 5}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const handleMove = (index) => {
        setHover(index);

    }
    const handleClick = (index) => {

        setRating(index);
    }
    const handleLeave = () => {
        setHover(rating);

    }


    return (<div className="star-rating">


        {
            [...Array(noOfStars)].map((_, i) => {
                i = i + 1;
                return (<FaStar key={i} className={i <= (hover || rating) ? "active" : "inactive"}
                                onMouseMove={() => handleMove(i)} onMouseLeave={() => handleLeave()}
                                onClick={() => handleClick(i)} size={40}/>)


            })}
    </div>)
}
