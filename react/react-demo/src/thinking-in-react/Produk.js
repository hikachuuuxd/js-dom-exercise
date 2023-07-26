import { useState } from "react";

const produks = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Peanuts", price: "$1", stocked: true, name: "Anya" }
  ];

  const FilterProduk = ({filter, stok, filterValue, stokValue}) => {

    return(
        <>
        <input name="search"
             placeholder="search produk" 
             className="input-search"
             value={filter}
             onChange={(e) => filterValue(e.target.value)}

             />
        <input type="checkbox" 
            checked={stok}
            onChange={(e) => stokValue(e.target.checked)}
        />
        {' '} Hanya menampilkan stok yang tersedia
        </>
    )
  }

  const TableProdukRow = ({produk}) => {
 
    return(
        <tr>
            <td>{produk.name}</td>
            <td>{produk.price}</td>
        </tr>
    )

  }
  const TableProdukHeader = ({category}) => {
    
    return(
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    )
  }
  const TableProduk = ({produks, stok, filter}) => {
    const rows = [];
    let lastCategory = null;
    produks.forEach(produk => {
        if(produk.name.toLowerCase().indexOf(filter.toLowerCase()) === -1) return;
        if(produk.stok && !stok) return;
        if(produk.category !== lastCategory){
           rows.push(
                <TableProdukHeader 
                    category={produk.category}
                    key={produk.category}
                />
            )
        }

        
        rows.push(
            <TableProdukRow 
                produk={produk}
                key={produk.name}
            />
        )

        lastCategory = produk.category;
    })

    return (
        <table border="1px" cellPadding="10px" cellSpacing="0px">
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>
    )
  }

  export default function Produk(){
    const [filter, setFilter] = useState('');
    const [stok, setStok] = useState(false);
    return(
        <>
            <FilterProduk 
                filter={filter}
                filterValue={setFilter}
                stok={stok}
                stokValue={setStok}
            />
            <TableProduk produks={produks}
                stok={stok}
                filter={filter}
            />

        </>
    )
  }

  