import { useContext, useState } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = ({ id, name, image, description, price }) => {
  const cartCtx = useContext(CartContext);
  const formattedPrice = `₪${price.toFixed(2)}`;
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: id,
      name: name,
      image: image,
      amount: amount,
      price: price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <img src={image} alt={name} onClick={togglePopup} />
        {!isPopupOpen && (
          <div className={classes.mealDetails}>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{formattedPrice}</div>
          </div>
        )}
        {isPopupOpen && (
          <div className={classes.popup}>
            <div className={classes.popupContent}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p className={classes.price}>{formattedPrice}</p>
              <button onClick={togglePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
