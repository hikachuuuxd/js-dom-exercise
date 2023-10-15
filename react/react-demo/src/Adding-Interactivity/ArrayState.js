import { useState } from "react";

export function Array ()
{
    const [value, setValue] = useState({
        name: 'name',
        number: 'number'
    });
    const [contacts, setContact] = useState([{
        name: 'name',
        number: 'number'
    },
    {
        name: 'name2',
        number: 'number2'
    },

    ])
    const addContact = () => {
        setContact([...contacts, {
            name: value.name,
            number: value.number
        }])
        setValue({...value, name: ' ', number: ' '})
    } 

    const deleteContact = (id) => {
        setContact(contacts.filter((contact, index) => 
            index != id
        ))
    }

    return(
<>
<p>Tambah Kontak</p>
<input 
    name="name"
    value={value.name}
    onChange={(e) => setValue({...value, name: e.target.value})}            
/>
<input 
    name="number"
    value={value.number}
    onChange={(e) => setValue({...value, number: e.target.value})}            
/>
<button onClick={addContact}>add</button>
<br/>

<p>Kontak list</p>
{
contacts.map((contact, id) => 
<ul key={id}>
    <li>{contact.name}</li>
    <li>{contact.number}</li>
    <li><button onClick={() => deleteContact(id)}>delete</button></li>
</ul>
)
}
</>
    )
}