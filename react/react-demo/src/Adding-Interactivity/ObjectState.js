import { useState } from "react"

export function UpObject ()
{
    const [hobby, setHobby] = useState('')
    const [person, setPerson] = useState({
        name: "Hikari Mizu",
        hobbies: ['writting', 'ngoding', 'reading'],
        brother: {
            name: "Itazu",
            age: 20 
        },
    })

    return(
        <>
        <input
        value={person.name}
        onChange={(e) => setPerson({...person, name: e.target.value})}
        />
        <br></br>
        <input
        value={person.brother.name}
        onChange={(e) => setPerson({...person, brother: {...person.brother, name: e.target.value}})}
        />
        <br></br>
        <input
        value={person.brother.age}
        onChange={(e) => setPerson({...person, brother: {...person.brother, age: e.target.value}})}
        />


        <p>{person.name}</p>
        <p>Hobbi</p>
        {'naem ' + person.brother.name}
        {' ' + person.brother.age + ' tahun'}
      
        </>
    )
}