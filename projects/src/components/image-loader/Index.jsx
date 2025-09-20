import {useState,useEffect} from "react";

export default function ImageLoader() {
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(1)
    const [images, setImages] = useState([])

    async function loadImage() {
try {
    setLoading(true)
    const resp = await fetch(`https://dummyjson.com/products?limit=2`)
    const data = await resp.json()
    if (data&&data.products) {
        setImages((prev) => [...prev, ...data.products])
        setLoading(false)
    }
    console.log(data)
}catch(err) {
    console.log(err.message)
    setLoading(false)


}


    }

    useEffect(() => {
        loadImage()


    },[count])

if (loading) {

    return (<div>Loading...</div>)
}


return (<>


    <div className="load-more-container">

        <div className="image-container">
            {images?.map((item) => (<div><img className="image-loader" src={item.thumbnail} alt={item.title}  key={item.id} />
            <p>{item.title}</p>
            </div>
            ))}
        </div>
    </div>
    <button onClick={()=>setCount(count+1)}>Load More</button>

</>)
}