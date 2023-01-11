import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { collection, getDocs } from "firebase/firestore";
// import * as firebase from 'firebase'
import {db} from './index'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    console.log(db);
    // firebase.firestore().collection('products').get().then((snapshot) => {
    //   console.log(snapshot);
    // })

    getDocs(collection(db, "products")).then(snapshot =>{               
      const products = snapshot.docs.map(doc => ({...doc.data(), id:doc.id }));
      
      this.setState({
        products
      })
      console.log("products", products);
    })

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
