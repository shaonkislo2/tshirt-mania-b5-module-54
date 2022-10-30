import React from "react";
import TShirt from "./../TShirt/TShirt";
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
  // Conditional rendering options
  // 1. Element variable
  // 2. ternary operator condition ? true : false
  // && Operator (shorthand)
  // || Operator
  let command;
  if(cart.length === 0){
    command = <p>Please Add at least one item!!</p>
  }
  else if(cart.length === 1){
    command = <p>Please add more...</p>
  }
  else{
    command = <p><small>Thanks for adding item</small></p>
  }
  return (
    <div>
      <h2>Item Selected: {cart.length} 
      </h2>
      
      {cart.map((tShirt) => (
        <p>
            {tShirt.name}
            <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
            </p>
      ))}
      
      {command}
      {cart.length !== 4 ? <p>keep adding</p> : <button>Remove all</button>}
      {cart.length === 3 && <div className="orange">
        <h3>Trigonal</h3>
        <p>Tin jon ke ki gift diba</p>
        </div>}
      {cart.length === 0 || <p>YAY! You are Buying</p>}
      
    </div>
  );
};

export default Cart;
