export default function Gallery()
{
 return(
    <section>
        <h1>Ini adalah Gallery</h1>
        <Image />
        <Image />
        <Image />
        <Image />
    </section>
 )   
}

function Image()
{
    return(
        <img 
         src="https://source.unsplash.com/random/"
         alt="image" 
         width={100}
         height={100}
         style={{margin: 10, borderRadius: 50}}
        />
    )
}