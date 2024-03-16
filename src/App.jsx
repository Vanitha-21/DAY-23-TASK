
import { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './shoppingcart';

function App() {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productToRemove.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <Header />
      <main>
        <ProductList addToCart={addToCart} />
        <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>
    </div>
  );
}

export default App;

