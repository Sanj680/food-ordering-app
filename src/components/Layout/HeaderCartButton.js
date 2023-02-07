import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const HeaderCartButton = (props) => {
  const Cartctx = useContext(CartContext)

  const numberOfCartItems = Cartctx.items.reduce((curNumber,item) =>{  //reduce functions reduces the array of items to a single number
return curNumber + item.amount // item.amount returns number of items per type in cart, for ex if I added sushi 3 times, in cart it would be reflected as 1 only.
  },0)


  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;