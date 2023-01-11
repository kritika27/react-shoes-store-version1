import React, { useState } from 'react';
import data from "../../data";
import "./Products.css";

export const Products = () => {
    const [item, setItem] = useState(data);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [cart, setCart] = useState([]);
    const [fav, setFav] = useState([]);
    const [shoe, setShoe] = useState(4);
    const [pages, setPages] = useState(item.length / shoe);






    const addfav = (name, price, id, imageUrl) => {

        const newItem = {
            id: id,
            name: name,
            imageUrl: imageUrl,
            price: price,

        }
        setFav([...fav, newItem]);

    }



    const add = (id, name, color, price, amount, size) => {

        const tempItem = cart.find((i) => i.id === id + color + size)
        if (tempItem) {
            const tempCart = cart.map((cartItem) => {
                if (cartItem.id === id + color + size) {
                    let newAmount = cartItem.amount + amount
                    console.log(newAmount);
                    return { ...cartItem, amount: newAmount }
                } else {
                    return cartItem
                }
            })
            return { cart: tempCart }
        } else {


            const newItem = {
                id: id + color + size,
                name: name,
                color: color,
                price: price,
                size: size,
                amount: amount
            }
            setCart([...cart, newItem]);

        }
    }
    console.log(cart);
    console.log(fav);

    return (
        <div className="cocktails-center">
        {item.map((el) => {
          
          return (
            <article key={el.id} className="cocktail">
              <div className="img-container">
                <img src={el.imageUrl} alt={el.name} />
              </div>
              <div className="cocktail-footer">
                <div className="product">
                  <h4>{el.name}</h4>
                  <h4 className="price">${el.price}</h4>
                </div>
                <div style={{ display: "flex", textAlign: "center" }}>
                                 {
                                     el.colors.map((it, index) => (
                                         <p key={index} style={{ background: it, height: "40px", width: "40px", borderRadius: "50%", cursor: "pointer" }} onClick={() => setColor(it)}></p>
                                     )
                                     )
                                 }
                             </div>
                             <div style={{ display: "flex", textAlign: "center" }}>
                                 {
                                     el.size.map((it, index) => (
                                         <button key={index} style={{ height: "40px", width: "40px", borderRadius: "50%", cursor: "pointer" }} onClick={() => setSize(it)}>{it}</button>
                                     )
                                     )
                                 }
                             </div>
                             {/* <i className="fa fa-heart" onClick={() => addfav(el.name, el.price, el.id, el.imageUrl)}></i> */}
                             <button>-</button>
                             <p>{el.amount}</p>
                             <button>+</button>
                             <button onClick={() => add(el.name, el.price, color, el.id, el.amount, size)}>Add to Cart</button>

                
                
              </div>
            </article>
          );
        })}
      </div>
    )
}
