import { useReducer } from 'react';

/**
 * ReducerExample Component - Demonstrates useReducer hook
 * 
 * Learn:
 * - How to use useReducer for complex state management
 * - Defining actions and action types
 * - Writing reducer functions
 * - When to use useReducer vs useState
 */

// Step 1: Define types for state and actions
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

// Step 2: Create reducer function
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      
      let newItems;
      if (existingItem) {
        // Item exists, increment quantity
        newItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // New item, add with quantity 1
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { items: newItems, total };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
}

// Sample products
const products = [
  { id: 1, name: 'React Book', price: 29.99 },
  { id: 2, name: 'TypeScript Guide', price: 34.99 },
  { id: 3, name: 'Web Dev Course', price: 49.99 },
];

function ReducerExample() {
  // Step 3: Use the reducer
  const [cart, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addItem = (product: typeof products[0]) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <div
      style={{
        padding: '20px',
        border: '2px solid #52c41a',
        borderRadius: '8px',
        margin: '10px',
      }}
    >
      <h2>useReducer Example - Shopping Cart</h2>
      <p style={{ fontSize: '14px', color: '#666' }}>
        useReducer is ideal for complex state logic with multiple sub-values and actions.
      </p>

      {/* Product List */}
      <div style={{ marginTop: '15px' }}>
        <h3>Available Products</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                padding: '10px',
                border: '1px solid #d9d9d9',
                borderRadius: '4px',
              }}
            >
              <div>{product.name}</div>
              <div style={{ fontWeight: 'bold' }}>${product.price}</div>
              <button
                onClick={() => addItem(product)}
                style={{
                  marginTop: '5px',
                  padding: '5px 10px',
                  backgroundColor: '#52c41a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div style={{ marginTop: '20px' }}>
        <h3>Shopping Cart</h3>
        {cart.items.length === 0 ? (
          <p style={{ color: '#999' }}>Your cart is empty</p>
        ) : (
          <>
            {cart.items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px',
                  border: '1px solid #d9d9d9',
                  borderRadius: '4px',
                  marginBottom: '5px',
                }}
              >
                <div>
                  <strong>{item.name}</strong> - ${item.price} x {item.quantity}
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#ff4d4f',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div
              style={{
                marginTop: '15px',
                padding: '15px',
                backgroundColor: '#f0f0f0',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <strong style={{ fontSize: '18px' }}>Total: ${cart.total.toFixed(2)}</strong>
              <button
                onClick={() => dispatch({ type: 'CLEAR_CART' })}
                style={{
                  padding: '8px 15px',
                  backgroundColor: '#ff4d4f',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ReducerExample;
