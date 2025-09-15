import {useEffect, useState} from "react";

export default function RandomColor() {
    const [typeColor, setTypeColor] = useState("hex");
    const [color, setColor] = useState("#00000");
    const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    const randomUtill = (lenght) => {
        return Math.floor(Math.random() * lenght);
    }
    const randomRGBColor = () => {
        let r = randomUtill(256);
        let g = randomUtill(256);
        let b = randomUtill(256);

        setColor(`rgb(${r},${g},${b})`);
    }
    const randomHexColorHandle = () => {

        let hex = "#"
        for (let i = 0; i < 6; i++) {
            hex = hex + hexValues[randomUtill(hexValues.length)];


        }
        setColor(hex);

    }

    useEffect(() => {
        if (typeColor === "hex") {
            randomHexColorHandle()
        } else {
            randomRGBColor()
        }
    }, [typeColor]);
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
        }}>
            <button onClick={() => setTypeColor("hex")}>Generate HEX Rondom Color</button>
            <button onClick={() => setTypeColor("rgb")}>Generate RGB Rondom Color</button>
            <button onClick={ ()=>typeColor==="rgb" ? randomRGBColor():randomHexColorHandle()}>Generate Rondom Color</button>
            <h1>{color} ,{typeColor}</h1>
        </div>
    )

}