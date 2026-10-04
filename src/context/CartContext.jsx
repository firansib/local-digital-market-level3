import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find((i) => i.id === action.payload.id);
      if (existing) {
        return state.map((i) =>
          i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...state, { ...action.payload, qty: 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter((i) => i.id !== action.payload);
    case 'INCREASE_QTY':
      return state.map((i) =>
        i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
      );
    case 'DECREASE_QTY':
      return state
        .map((i) => (i.id === action.payload ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  const addItem    = (product) => dispatch({ type: 'ADD_ITEM',     payload: product });
  const removeItem = (id)      => dispatch({ type: 'REMOVE_ITEM',  payload: id });
  const increaseQty= (id)      => dispatch({ type: 'INCREASE_QTY', payload: id });
  const decreaseQty= (id)      => dispatch({ type: 'DECREASE_QTY', payload: id });
  const clearCart  = ()        => dispatch({ type: 'CLEAR_CART' });

  const isInCart = (id) => items.some((i) => i.id === id);
  const cartCount = items.reduce((sum, i) => sum + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, increaseQty, decreaseQty, clearCart, isInCart, cartCount, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
