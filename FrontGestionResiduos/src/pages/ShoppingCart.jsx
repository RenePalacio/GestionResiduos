import React, { useState } from 'react';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      nombre: "Compostera Doméstica",
      precio: 89.99,
      cantidad: 1,
      imagen: "https://via.placeholder.com/100",
      descripcion: "Compostera de 50L para residuos orgánicos"
    },
    {
      id: 2,
      nombre: "Kit de Reciclaje",
      precio: 49.99,
      cantidad: 1,
      imagen: "https://via.placeholder.com/100",
      descripcion: "Contenedores para separación de residuos"
    },
    {
      id: 3,
      nombre: "Bolsas Reutilizables",
      precio: 19.99,
      cantidad: 2,
      imagen: "https://via.placeholder.com/100",
      descripcion: "Pack de 5 bolsas ecológicas"
    }
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, cantidad: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  return (
    <div className="shopping-cart-container">
      <h1>Carrito de Compras</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Tu carrito está vacío</p>
          <button className="continue-shopping-btn">Continuar comprando</button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} className="item-image" />
                <div className="item-details">
                  <h3>{item.nombre}</h3>
                  <p>{item.descripcion}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.cantidad - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.cantidad}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.cantidad + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="item-price">
                  <p>${(item.precio * item.cantidad).toFixed(2)}</p>
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="remove-btn"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Resumen de Compra</h2>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>IVA (19%):</span>
              <span>${iva.toFixed(2)}</span>
            </div>
            <div className="summary-item total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceder al Pago</button>
            <button className="continue-shopping-btn">Continuar comprando</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart; 