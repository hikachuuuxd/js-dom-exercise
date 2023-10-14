import { useState } from "react";
function Props({color})
{
    
return(
    <ul style={{color: color}}> 
    <li>Contoh</li>
</ul>
)
}

// function PropsColor()
// {
//     const [color, setColor] = useState('red')
//     const colors = ['red','black', 'blue', 'green']
//     return(
//     <>
//     <select onChange={(e) => setColor(e.target.value)}>
//      {colors.map(e => ( <option>{e}</option>))}
//     </select>
//     <Props color={color}></Props>
//     </>
//     )
// }

export default Props