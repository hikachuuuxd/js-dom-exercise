import { data } from "./data";
import { useState } from "react";

export function Memory()
{
    const [index, setIndex] = useState(0)
    let datas = data[index]
    const [show, setShow] = useState(false)
    const handleNext = () => {
       index == data.length - 1 ? setIndex(index - 1) : setIndex(index + 1)
    }
    const handlePrev = () => {
        index == 0 ? setIndex(index + 1) : setIndex(index - 1)
    }
    return(
        <>
        <button onClick={handleNext}>next</button>
        <button onClick={handlePrev}>prev</button>
        <br></br>
        {datas.name}
        <br></br>
        
        <button onClick={() => setShow(!show)}>Show detail</button>
        <br></br>
        {show && datas.description}
       

        </>
    )
}