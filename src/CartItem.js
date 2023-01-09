import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 29999,
      title: "Nothing Phone",
      qty: 1,
      img: "",
    };
  }

  increaseQuantity = () => {
    // this.state.qty += 1; 
    // not correct way 

    // setState form 1
    this.setState({
      qty: this.state.qty + 1,
    });

    // setState form 2
    // this.setState((prevState) => {
    //     return {
    //         qty: prevState.qty + 1
    //     }
    // })
  };

  decreaseQuantity = () => {
    this.setState((prevState) => {
        if ( prevState.qty >= 1 ) {
            return {
                qty: prevState.qty - 1
            }
        }
    })
  };

  render() {
    const { price, title, qty } = this.state;

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
              onClick={this.increaseQuantity}
              />
            <img
              className="actions-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              alt="decrease"
              onClick={this.decreaseQuantity}
            />
            <img
              className="actions-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              alt="delete"
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
