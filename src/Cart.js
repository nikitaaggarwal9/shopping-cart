import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 29999,
          title: "Nothing Phone",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 9999,
          title: "Watch",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 59999,
          title: "Laptop",
          qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    // console.log("Hey please increase the qty of ", product);

    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      // products: products   // way 1
      products                // way 2
    });
  };

  handleDecreaseQuantity = (product) => {
    // console.log("Hey please increase the qty of ", product);

    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty == 0) return;
    
    products[index].qty -= 1;

    this.setState({
      products
    });
  };

  handleDelete = (id) => {
    const { products } = this.state;
    const filteredProducts = products.filter(product => product.id != id);

    this.setState({
      products: filteredProducts
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDelete={this.handleDelete}
              product={product}
              key={product.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
