function ConditionalRendering()
{
    /* Menulis kondisi dengan logic biasa
    function Item({ name, isPacked }) {
        if (isPacked) {
          return <li className="item">{name} ✔</li>;
        }
        return <li className="item">{name}</li>;
      }
      */

      /* Menulis logic conditional expression ? :
      function Item({ name, isPacked }) {
       
          return <li className="item">{isPacked ? name + '✔ ': name}</li>;
  
      }
      */

      // Menulis logic dengan syntakx react And operator && (kondisi true && componen)
      function Item({ name, isPacked }) {
        return <li className="item">{name} {isPacked && name + '✔ '}</li>;
    }
    
    return(
        <>

        <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>

        </>
        
    )
}



export default ConditionalRendering