export function RespondingToEvent()
{
    return(
    <>
        <p>e.stopPropagation untuk menghendikan event yang bersarang <br/>
        <b>Contoh tanpa e.stopPropagation</b></p>
        <div onClick={() => alert('ini div paretn')} style={{color: 'grey', width: 'max-width', margin: '10px', backgroundColor: 'grey', padding: '10px'}}>
            <button onClick={() => alert('Play Movies')}>Play Movie</button>
            <button onClick={() => alert('Thank You')}>Click Me</button>
        </div>

        <b>Contoh dengan e.stopPropagation</b>
        <div onClick={(e) => alert('ini div paretn')} style={{color: 'grey', width: 'max-width', margin: '10px', backgroundColor: 'grey', padding: '10px'}}>
            <button onClick={(e) => {
                e.stopPropagation();
                alert('Play Movies')
            }}>Play Movie</button>
            <button onClick={(e) => {
                e.stopPropagation();
                alert('Thank You')
            }}>Click Me</button>
        </div>


    <p>e.preventDefault untuk menghendikan event submit dalam form  <br/>
    <b>Contoh tanpa e.preventDefault</b></p>

    <form onSubmit={() => alert('submit form')}>
        <input/>
        <button type="submit">Submit</button>
    </form>
   
    <p style={{marginBottom:'10px' }}><b>Contoh dengan e.preventDefault</b></p>
    <form onSubmit={(e) => {
        e.preventDefault();
        alert('submit form')
    }}>
        <input/>
        <button type="submit">Submit</button>
    </form>
    </>
    
    )
}