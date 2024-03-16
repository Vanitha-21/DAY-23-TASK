
import PropTypes from 'prop-types';

function ShoppingCart({ cartItems, removeFromCart }) {
  return (
    <aside className="bg-light border-left p-4">
      <h2 className="mb-4">Shopping Cart</h2>
      <ul className="list-unstyled mb-0">
        {cartItems.map((item) => (
          <li key={item.id} className="mb-3">
            {item.name} - ${item.price} x {item.quantity}
            <button className="btn btn-sm btn-outline-danger ms-3" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
        {cartItems.length === 0 && <li>Your cart is empty</li>}
      </ul>
    </aside>
  );
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
