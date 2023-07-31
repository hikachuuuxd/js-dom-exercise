import Item from "./Item"
import { persons } from "./person"
function Staf(){
    const filter = persons.filter(e => e.profesi == 'Programmer')
    const person = filter.map((person, index) => <Item key={index} name={person.name} age={person.age} profile={person.profile} profesi={person.profesi} />);
    
    return <ul style={{listStyle: 'none', display: "flex", justifyContent: 'center'}}>
        {person}
    </ul>
}

// Part Of Describe UI Keeping Components Pure
function Increment({angka}){
    return <div>Angka ke - {angka}</div>
}

export default function tambah(){
    let angka = []
    for(let i = 1; i<= 12; i++){
        angka.push(<Increment key={i} angka={i} />)
    }

    return angka;
}