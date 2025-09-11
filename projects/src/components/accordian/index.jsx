import {useState} from 'react';
import data from './data';

export default function Accordian(){
    const [accordianData, setAccordianData] = useState(data);
    const [selected, setSelected] = useState(null);
    const [selectedMult, setSelectedMult] = useState([]);
    const [enableMult, setEnableMult] = useState(false);
    const clickHandler = (id) =>{selected === id ? setSelected(null) : setSelected(id);}
    const multipleClickHandler = (id) =>{
      const toggledQuestions = [...selectedMult];
      
        const index = toggledQuestions.indexOf(id);
        if(index > -1){
      
      setSelectedMult(toggledQuestions.filter((item)=> item !== id));
        }else{
        toggledQuestions.push(id);
        setSelectedMult(toggledQuestions)
    }}
        return(
    <div className="accordian">
        <button  onClick={()=> setEnableMult(!enableMult) } style={{borderColor:'white'}} >Enable Mult</button>
        {data.map((item) => (
            <>
            <div className="accordian-question"  id={item.id} onClick={enableMult? ()=>multipleClickHandler(item.id): ()=>clickHandler(item.id)} >
                {item.question}
            </div>
            <span>+</span>
            <div className="accordian-answer" id={item.id}>
              { !enableMult ? (selected===item.id && (<div>{item.answer}</div>) ): (selectedMult.includes(item.id) ? item.answer: null)}
            </div>
            </>
        ))}
    </div>
)}