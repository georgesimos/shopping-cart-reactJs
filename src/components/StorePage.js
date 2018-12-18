import React, { Component } from "react";
import Header from "./Header";
import ProductsList from "./ProductsList";
import Cart from "./Cart";

// Initial Demo Store State
const initialState = {
  products: [
    { id: 1, title: "Product 1", price: 15 },
    { id: 2, title: "Product 2", price: 21 },
    { id: 3, title: "Product 3", price: 20 }
  ],
  cart: {
    addedIds: [],
    quantityById: {}
  },
  openCart: false
};

class StorePage extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.openCartSlider = this.openCartSlider.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.clearLocalStorage = this.clearLocalStorage.bind(this);
  }

  // Local Storage Set Up
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  // Clearing LocalStorage and Set state to initial State
  clearLocalStorage() {
    localStorage.clear();
    this.setState(initialState);
  }

  // Show the cart
  openCartSlider() {
    this.setState({ openCart: !this.state.openCart });
  }

  // Adding products to cart
  addToCart(prodId) {
    const { addedIds, quantityById } = this.state.cart;
    if (addedIds.indexOf(prodId) !== -1) {
      this.setState({
        cart: {
          addedIds: [...addedIds],
          quantityById: {
            ...quantityById,
            [prodId]: (quantityById[prodId] || 0) + 1
          }
        },
        openCart: true
      });
    } else {
      this.setState({
        cart: {
          addedIds: [...addedIds, prodId],
          quantityById: {
            ...quantityById,
            [prodId]: (quantityById[prodId] || 0) + 1
          }
        },
        openCart: true
      });
    }
  }

  // Adding items to this.state.quantityById
  addItem(prodId) {
    const { addedIds, quantityById } = this.state.cart;
    this.setState({
      cart: {
        addedIds,
        quantityById: {
          ...quantityById,
          [prodId]: (quantityById[prodId] || 0) + 1
        }
      }
    });
  }

  // Removing items to this.state.quantityById
  removeItem(prodId) {
    const { addedIds, quantityById } = this.state.cart;
    this.setState({
      cart: {
        addedIds,
        quantityById: {
          ...quantityById,
          [prodId]: quantityById[prodId] > 0 ? quantityById[prodId] - 1 : 0
        }
      }
    });
  }

  render() {
    const { openCart } = this.state;
    return (
      <div>
        <Header openCart={this.openCartSlider} />
        <div className="content-container">
          <h2>Shopping Cart Demo</h2>
          <ProductsList
            products={this.state.products}
            addToCart={this.addToCart}
          />
          <Cart
            cart={this.state.cart}
            openCart={openCart}
            products={this.state.products}
            openCartSlider={this.openCartSlider}
            addItem={this.addItem}
            removeItem={this.removeItem}
            clearLocalStorage={this.clearLocalStorage}
          />
        </div>
      </div>
    );
  }
}

export default StorePage;
