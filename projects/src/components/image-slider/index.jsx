import {useEffect, useState} from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import "./styles.css"

export default function ImageSlider({url, page = 1, limit = 5}) {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);

    async function fetchImages(getUrl) {

        try {
            const resp = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await resp.json();
            console.log(data)
            if (data) {
                setImages(data)

            }
        } catch (err) {

            console.log(err.message);
        }
    }

    const handleClickLeft = (getIndex) => {
        (getIndex < 1) ? setCurrentImage(images.length - 1)
            : setCurrentImage(getIndex - 1);


    }
    const handleClickRight = (getIndex) => {
        (getIndex === images.length-1) ? setCurrentImage(0)
            : setCurrentImage(getIndex +1);


    }
    useEffect(() => {
        if (url !== "") fetchImages(url);


    }, [url])

    return (

        <div className="container">
            <BsArrowLeftCircleFill onClick={() => handleClickLeft(currentImage)}
                                   className="arrow arrow-left"></BsArrowLeftCircleFill>
            {images && images.length ? images.map((image, index) => (


                <img key={image.id} src={image.download_url} alt={image.download_url}
                     className={currentImage === index ? "current-image" : "current-image hidden"}/>
            )) : null}
<BsArrowRightCircleFill onClick={()=>handleClickRight(currentImage)} className="arrow arrow-right"></BsArrowRightCircleFill>
        </div>


    )

}