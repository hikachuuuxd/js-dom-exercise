import './style.css';
import { getImage } from './image';
import { useState } from 'react';
export default function({name, profile, age, profesi}){
    const [hover, setHover] = useState(null);
    return (
        <li style={{padding: 10, cursor: 'pointer'}} >
        <p style={{fontWeight: 'bolder', fontSize: "1.2em"}}>{name}</p>
        <img onMouseOver={() => setHover(true)}
             onMouseOut={() => setHover(false)}
            src={getImage(profile)}
            width={100}
            height={100}
            style={{borderRadius: 50, display: 'block', margin: 10, objectFit: 'cover', border: hover && '2px solid red'}}
        />
        <p>Umur : {age} tahun</p>
        <p style={{fontWeight: 'lighter'}}> Pekerjaan : {profesi}</p>
    </li>
    )
}