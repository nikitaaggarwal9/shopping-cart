import React from "react";

class CartItem extends React.Component {
  render() {
    // const { price, title, qty } = this.state;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDelete } = this.props;
    const { price, title, qty } = product;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img src="https://i.ebayimg.com/images/g/-KYAAOSwRkpi0SZE/s-l500.jpg" alt="" style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#ccc" }}>Rs {price}</div>
          <div style={{ color: "gray" }}>{qty}</div>
          <div className="cart-item-actions">
            <img
              className="actions-icons"
              src="https://cdn-icons.flaticon.com/svg/3914/3914248.svg?token=exp=1673176970~hmac=ffaf18a523970548e376c32548950d53"
              alt="increase"
              onClick={()=>onIncreaseQuantity(product)}
              />
            <img
              className="actions-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              alt="decrease"
              onClick={()=>onDecreaseQuantity(product)}
              />
            <img
              className="actions-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              alt="delete"
              onClick={()=>onDelete(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
