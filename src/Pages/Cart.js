import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Panier</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Supprimer du panier</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
