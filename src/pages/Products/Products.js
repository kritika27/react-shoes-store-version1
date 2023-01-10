import React, { useState } from 'react';
import data from "../../data";
import "./Products.css";

export const Products = () => {
    const [item, setItem] = useState(data);

    return (
        <div className="prodlist">
            {
                item.map(el => {
console.log(el.colors);
                    return (
                        <div className="prod" key={el.id}>
                            <img src={el.imageUrl} alt={el.name} />
                            <p>{el.name}</p>
                            <p>${el.price}</p>
 <div style={{display:"flex",textAlign:"center"}}>
    {
el.colors.map(it=>(
        <p style={{background:it,height:"40px",width:"40px",borderRadius:"50%"}}></p>
    )
)
    }
    </div>

                        </div> 
                    )
                })
            }

        </div>
    )
}
