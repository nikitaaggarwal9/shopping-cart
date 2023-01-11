import React from "react";

const CartItem = (props) => {
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDelete } = props;
  const { price, title, qty, img } = product;

  return (
    <div className="cart-item">
      <div className="left-block">
        <img
          src={img}
          style={styles.image}
        />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "gray" }}>Rs {price}</div>
        <div style={{ color: "gray" }}>{qty}</div>
        <div className="cart-item-actions">
          <img
            className="actions-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            alt="increase"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            className="actions-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            alt="decrease"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            className="actions-icons"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            alt="delete"
            onClick={() => onDelete(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
