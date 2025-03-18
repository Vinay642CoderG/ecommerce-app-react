import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from './cartActions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the item already exists in the cart
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // Update the quantity if the item exists
        const updatedItems = [...state.cartItems];
        updatedItems[itemIndex].quantity += 1;
        return { ...state, cartItems: updatedItems };
      } else {
        // Add new item to the cart
        return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
      }
    case REMOVE_FROM_CART:
      // Remove the item from the cart by its ID
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };
    
    case UPDATE_QUANTITY:
      // Update the quantity of an item
      const { itemId, action: quantityAction } = action.payload;
      
      const updatedCart = state.cartItems.map(item => {
        if (item.id === itemId) {
          let updatedQuantity = item.quantity;
          if (quantityAction === 'increase') {
            updatedQuantity += 1; // Increase quantity
          } else if (quantityAction === 'decrease' && item.quantity > 1) {
            updatedQuantity -= 1; // Decrease quantity (ensure it doesn't go below 1)
          }
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });
      return { ...state, cartItems: updatedCart };

    default:
      return state;
  }
};

export default cartReducer;
