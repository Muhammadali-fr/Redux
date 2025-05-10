// src/components/Cart.jsx
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increaseQty, decreaseQty } from '../store/features/cartSlice';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems);
  
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item, id) => (
        <div key={id}>
          {item.name} - ${item.price} × {item.quantity}
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart
