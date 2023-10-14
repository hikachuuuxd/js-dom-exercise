function KurungKurawal()
{

    // Mengganti petik dua dengan kurung kurawal untuk mendeklarasikan nilai menjadi sebuah variable  
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';


    const name = 'Gregorio Y. Zara';

    const today = new Date();

    function formatDate(date) {
    return new Intl.DateTimeFormat(
        'id-IN',
        { weekday: 'long' }
    ).format(date);
}

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
};

const image = {
    title: "avatar", 
    attribute: {
        url: "https://i.imgur.com/7vQD0fPs.jpg",
        alt: "Gregorio Y. Zara"

    }
}
    return (

        <>
        <p>Mengganti petik dua dengan kurung kurawal untuk menuliskan nilai menjadi sebuah variable  </p>
        <img
        className="avatar"
        src={avatar}
        alt={description}
      />

        <p>kemudian nilai dalam variable dapat di deklarasikan dalam tag html</p>
        <h1>{name}'s To Do List</h1>

        <p>Any JavaScript expression will work between curly braces, including function calls like formatDate()</p>
        <h1>To Do List for {formatDate(today)}</h1>

        <p>Kurung kurawal hanya bisa digunakan</p>
        <ul>
            <li>Text yang digunakan di dalam tag <br/>
            {`As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.`}
            </li>
            <li>Attribut html yang diikuti tanda = <br/>
            {`As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}"`}
            </li>
        </ul>
        <br/>

        <p>To pass a JS object in JSX, you must wrap the object in another pair of curly braces: {`person={{ name: "Hedy Lamarr", inventions: 5 }}`} <br/>
        But when you need an inline style, you pass an object to the style attribute:
        </p>

        <ul style={{
            backgroundColor: 'black',
            padding: '10px',
            color: 'pink'
            }}>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>

        <p>You can move several expressions into one object, and reference them in your JSX inside curly braces:</p>

    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className={image.title}
        src={image.url}
        alt={image.alt}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
        </>

    
    );
    

}

export default KurungKurawal;