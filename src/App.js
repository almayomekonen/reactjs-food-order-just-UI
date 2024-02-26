import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App () {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {}

  const hideCartHandler = () => {}

  return (
    <CartProvider>
      {cartIsShown && <div>Cart...</div>}
      <Cart/>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
