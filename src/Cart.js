import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <div className="cart">
      {props.products.map((product) => {
        return (
          <CartItem
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDelete={props.onDelete}
            product={product}
            key={product.id}
          />
        );
      })}
    </div>
  );
};

export default Cart;
