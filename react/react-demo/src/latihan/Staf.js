import Item from "./Item"
import { persons } from "./person"
export default function Staf(){
    const filter = persons.filter(e => e.profesi == 'Programmer')
    const person = filter.map((person, index) => <Item key={index} name={person.name} age={person.age} profile={person.profile} profesi={person.profesi} />);
    
    return <ul style={{listStyle: 'none', display: "flex", justifyContent: 'center'}}>
        {person}
    </ul>
}