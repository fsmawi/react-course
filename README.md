# React Course - Hooks & Components

A comprehensive React learning project demonstrating essential React hooks and component patterns. This project serves as a hands-on tutorial for understanding React's core concepts through practical, interactive examples.

## 📚 What You'll Learn

This project includes working examples of the following React hooks and concepts:

- **useState** - Basic state management
- **useEffect** - Side effects and lifecycle management
- **useContext** - Global state sharing across components
- **useReducer** - Complex state management with predictable state transitions
- **useRef** - DOM references and persistent values
- **useMemo** - Performance optimization through memoization
- **useCallback** - Memoized callback functions to prevent unnecessary re-renders

## 🗂️ Project Structure

```
react-course/
├── src/
│   ├── components/
│   │   ├── Counter.tsx          # useState example
│   │   ├── EffectExample.tsx    # useEffect example
│   │   ├── ContextExample.tsx   # useContext example
│   │   ├── ReducerExample.tsx   # useReducer example
│   │   ├── RefExample.tsx       # useRef example
│   │   ├── MemoExample.tsx      # useMemo example
│   │   ├── CallbackExample.tsx  # useCallback example
│   │   ├── Greeting.tsx         # Basic component
│   │   └── TodoList.tsx         # Combined hooks example
│   ├── App.tsx                  # Main application
│   └── main.tsx                 # Entry point
├── public/                      # Static assets
└── package.json                 # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd react-course
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📖 Available Scripts

- `npm run dev` - Start the development server with hot-reload
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎯 Component Examples

### Counter (useState)
Demonstrates basic state management with increment/decrement functionality.

### EffectExample (useEffect)
Shows how to handle side effects, component lifecycle, and cleanup functions.

### ContextExample (useContext)
Illustrates global state sharing across components without prop drilling.

### ReducerExample (useReducer)
Demonstrates complex state management with predictable state transitions using actions.

### RefExample (useRef)
Shows DOM manipulation and persistent values that don't trigger re-renders.

### MemoExample (useMemo)
Performance optimization through expensive computation memoization.

### CallbackExample (useCallback)
Prevents unnecessary child component re-renders by memoizing callback functions.

### TodoList
A practical example combining multiple hooks to build a functional todo application.

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7.2** - Fast build tool and dev server
- **ESLint** - Code linting and quality
- **React Hooks** - State and lifecycle management

## 🎓 Learning Path

1. Start with **Counter** to understand basic state
2. Move to **EffectExample** for side effects
3. Explore **ContextExample** for global state
4. Learn **ReducerExample** for complex state logic
5. Practice **RefExample** for DOM manipulation
6. Optimize with **MemoExample** and **CallbackExample**
7. Combine everything in **TodoList**

## 💡 Tips

- Each component is self-contained and can be studied independently
- Open the browser console to see example logging and debugging output
- Modify the code and see hot-reload in action
- Read inline comments for detailed explanations

## 📝 License

This project is created for educational purposes.

## 🤝 Contributing

Feel free to fork this project and add your own examples or improvements!

---

**Happy Learning! 🚀**
