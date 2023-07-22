import './Dropdown.css';

const Dropdown = ({id, open, menu}) => 
{
    return(
        <ul className={open && menu.id == id ? "dropdown" : "hidden"} >{menu.sub.map((e, i) => {
            return (
                <li key={i} >{e.title}</li>
            )
        })}</ul>
    )
}

export default Dropdown;