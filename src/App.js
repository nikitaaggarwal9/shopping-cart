import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { doc, getDocs, onSnapshot, addDoc, updateDoc, deleteDoc, query, where, orderBy } from "firebase/firestore";
// import * as firebase from 'firebase'
import { db, productsRef } from "./index";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    // !!!! doesn't work !!!!
    // firebase.firestore().collection('products').get().then((snapshot) => {
    //   console.log(snapshot);
    // })

    // works fine but doesn't update date automatically
    // getDocs(productsRef).then(snapshot =>{
    //   const products = snapshot.docs.map(doc => ({...doc.data(), id:doc.id }));

    //   this.setState({
    //     products,
    //     loading: false
    //   })
    //   console.log("products", products);
    // })

    // onSnapshot: updates data automatically when changed in db, acts like listener
    // onSnapshot(productsRef, (docsSnapshot) => { 
    //   const products = docsSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));

    //   this.setState({
    //     products,
    //     loading: false,
    //   });

    //   console.log("products", products);
    // });


    // onSnapshot + query
    const productsQuery =  query(productsRef, orderBy('price'));
    onSnapshot(productsQuery, (docsSnapshot) => { 
      const products = docsSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));

      this.setState({
        products,
        loading: false,
      });

      console.log("products", products);
    });


  }

  handleIncreaseQuantity = (product) => {
    // const { products } = this.state;
    // const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   // products: products     // way 1
    //   products                  // way 2 
    // });

    const productRef = doc(db,'products', product.id);

    updateDoc(productRef,{
      qty: product.qty + 1
    }).then(() => {
      console.log(product.title, "quantity incremented")
    }).catch(error => {
      console.log(error.message)
    });

  };

  handleDecreaseQuantity = (product) => {
    // const { products } = this.state;
    // const index = products.indexOf(product);

    // if (products[index].qty === 0) return;
    
    // products[index].qty -= 1;
    
    // this.setState({
      //   products,
      // });
      
    
    if (product.qty === 0) return;

    const productRef = doc(db,'products', product.id);
    updateDoc(productRef, {
      qty: product.qty - 1
    }).then(() => {
      console.log(product.title, "quantity decremented")
    }).catch(error => {
      console.log(error.message)
    });

  };

  handleDelete = (id) => {
    // const { products } = this.state;
    // const filteredProducts = products.filter((product) => product.id !== id);

    // this.setState({
    //   products: filteredProducts,
    // });

    deleteDoc(doc(db, "products", id));
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => (count += product.qty));

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let price = 0;

    products.forEach((product) => (price += product.price * product.qty));

    return price;
  };

  addProduct = () => {
    addDoc(productsRef, {
      title: 'Camera',
      qty: 1,
      img: '',
      price: 79999
    });
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct}>Add a Product</button>
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDelete}
          products={products}
        />
        {loading && <h1>Loding Products...</h1>}
        <div style={{ padding: 10, fontSize: 25 }}>
          Total: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
