import {data} from './data.js'
import { Image } from './Image.js';

export default function ShowList() {
  const listItems = data.map(person =>
    <li key={person.id}>
      <img
        src={Image(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}