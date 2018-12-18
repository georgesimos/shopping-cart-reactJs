import React, { Component } from "react";
import classnames from "classnames";

class Cart extends Component {
  // Console log XML on Checkout
  onCheckout(data) {
    const productListXML = data.products.map(p => {
      return `
      <product>
        <title> ${p.title}</title>
        <price> ${p.price}</price>
        <qty>${p.qty}</qty>
      </product>
      `;
    });
    var xml = `
    <xml>
      <order>
        <products>
        ${productListXML}
        </products>
        <total>${data.total}</total>
      </order>
    </xml>`;
    console.log(xml);
    this.props.clearLocalStorage();
  }

  render() {
    const {
      products,
      cart,
      openCart,
      openCartSlider,
      addItem,
      removeItem
    } = this.props;

    let total = 0;
    let dataToSend = {
      products: [],
      total: 0
    };

    // Mapping Cart and returning all the cart logic
    const toShow = cart.addedIds.map(id => {
      const p = products.filter(product => product.id === id);
      const currentTotal = parseFloat(
        cart.quantityById[p[0].id] * p[0].price,
        10
      );
      total = total + currentTotal;
      dataToSend = {
        products: [
          ...dataToSend.products,
          {
            productId: p[0].id,
            title: p[0].title,
            price: p[0].price,
            qty: cart.quantityById[p[0].id]
          }
        ],
        total
      };
      if (cart.quantityById[p[0].id] > 0) {
        return (
          <li key={p[0].id} className="cart--item">
            <div className="cart--item-tags">
              <span className="cart--item__qty">
                {cart.quantityById[p[0].id]} x
              </span>
              <span className="cart--item__name">{p[0].title}</span>
              <div className="cart--item__price">
                {cart.quantityById[p[0].id] * p[0].price}
              </div>
            </div>
            <div className="cart--item-actions">
              <button className="btn-add" onClick={() => addItem(p[0].id)}>
                +
              </button>
              <button
                className="btn-remove"
                onClick={() => removeItem(p[0].id)}
              >
                -
              </button>
            </div>
          </li>
        );
      }
      return null;
    });
    return (
      <div>
        <div className={classnames("cart", { "speed-in": openCart })}>
          <h2>Cart</h2>

          <ul className="cart--items">{toShow}</ul>
          <div className="cart-total">
            <p>Total</p>
            <p>{total > 100 ? total - total * 0.1 : total}</p>
          </div>
          <button
            onClick={this.onCheckout.bind(this, dataToSend)}
            className="checkout-btn"
          >
            Checkout
          </button>
          <button onClick={openCartSlider} className="close-btn">
            Close Cart
          </button>
          {total > 100 && (
            <div className="notify-user">You Earn 10% discount</div>
          )}
        </div>
        <div
          className={classnames("shadow-layer", {
            "is-visible": openCart
          })}
        />
      </div>
    );
  }
}

export default Cart;
