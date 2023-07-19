import React, { useEffect, useState } from "react";
import { data } from '../../constants';
import classes from "./DropDown.module.css"
import './DropDown.css'
import { faqArrow } from "../../assets";


const DropDownButton = () => {
  const [selected, setSelected] = useState(null)

const toggle = (i) => {
  if(selected === i) {
return setSelected(null);
  }
  setSelected(i);
}

  return (
    <div className="wrapper"> 
      <div className="accordion">
      {data.map((item, i) => (
        <div className="item group">
<div className="title" onClick={() => toggle(i)}>
        <h2 className="item-question">{item.question}</h2>
        <span>{selected === i ? <img className="rotate-180" src={faqArrow} alt="" /> : <img className="group-hover:animate-bounce" src={faqArrow} alt="" />}</span>
</div>
<div className={selected === i ? "content show" : 'content'}>
{item.answer}
</div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default DropDownButton