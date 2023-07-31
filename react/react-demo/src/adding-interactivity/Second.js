import { useState } from "react"

export default function Form(){
    const [to, setTo] = useState('Nisrina');
    const [message, setMessage ] = useState('Hallo')
    function submitForm(e){
        e.preventDefault();
        setTimeout(() => alert(`you send ${message} to ${to}`), 1000)
    }
    return(
        <form onSubmit={submitForm}>
            <label>
                to:{' '}
                <select value={to} onChange={(e) => setTo(e.target.value)}>
                    <option value="Nisrina">Nisrina</option>
                    <option value="Hikari">Hikari</option>
                </select>
            </label>
            <br />
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} />
            <button type="submit">send</button>
        </form>
    )
}