import {useState} from 'react';
import data from './data';

export default function Accordian(){
    const [accordianData, setAccordianData] = useState(data);
    const [selected, setSelected] = useState(null);
    const clickHandler = (id) =>{
     selected === id ? setSelected(null) : setSelected(id);}

return(
    <div className="accordian">
        {data.map((item) => (
            <>
            <div className="accordian-question" id={item.id} onClick={()=>clickHandler(item.id)} >
                {item.question}
            </div>
            <div className="accordian-answer" id={item.id}>
              {selected===item.id ? item.answer : null}
            </div>
            </>
        ))}
    </div>
)}