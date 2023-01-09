import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 29999,
          title: "Nothing Phone",
          qty: 1,
          img: "https://i.ebayimg.com/images/g/-KYAAOSwRkpi0SZE/s-l500.jpg",
          id: 1,
        },
        {
          price: 9999,
          title: "Watch",
          qty: 1,
          img: "https://watchzilla.in/wp-content/uploads/2021/08/IMG-20220728-WA0047.jpg",
          id: 2,
        },
        {
          price: 59999,
          title: "Laptop",
          qty: 1,
          img: "https://cdn.mos.cms.futurecdn.net/Sau6W3hnWTyGiNr3MsrTHf-1200-80.jpg",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      // products: products   // way 1
      products, // way 2
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) return;

    products[index].qty -= 1;

    this.setState({
      products,
    });
  };

  handleDelete = (id) => {
    const { products } = this.state;
    const filteredProducts = products.filter((product) => product.id !== id);

    this.setState({
      products: filteredProducts,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => count+=product.qty);

    return count;
  }
  
  getCartTotal = () => {
    const { products } = this.state;
    let price = 0;

    products.forEach(product => price+=product.price);

    return price;
  }

  render() {
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDelete}
          products={this.state.products}
        />
        <div style={{padding: 10, fontSize: 25}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
