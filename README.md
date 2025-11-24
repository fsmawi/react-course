# React Course - Hooks & Components

A comprehensive React learning project demonstrating essential React hooks, component patterns, and **React Router 7 framework mode**. This project serves as a hands-on tutorial for understanding React's core concepts through practical, interactive examples.

## 📚 What You'll Learn

This project includes working examples of the following React concepts:

### React Hooks
- **useState** - Basic state management
- **useEffect** - Side effects and lifecycle management
- **useContext** - Global state sharing across components
- **useReducer** - Complex state management with predictable state transitions
- **useRef** - DOM references and persistent values
- **useMemo** - Performance optimization through memoization
- **useCallback** - Memoized callback functions to prevent unnecessary re-renders

### React Router 7 Framework Mode
- **File-based routing** - Configuration-based routing with `routes.ts`
- **Route modules** - Enhanced route components with loader/action support
- **Type-safe routing** - Auto-generated TypeScript types for routes
- **SSR-ready** - Built-in server-side rendering capabilities

## 🗂️ Project Structure

```
react-course/
├── app/                          # React Router framework mode
│   ├── root.tsx                  # Root layout with HTML structure
│   ├── routes.ts                 # Route configuration
│   ├── entry.client.tsx          # Client-side hydration
│   ├── entry.server.tsx          # Server-side rendering
│   ├── app.css                   # Global styles
│   ├── routes/
│   │   ├── home.tsx              # Home page route
│   │   └── about.tsx             # About page route
│   └── components/
│       ├── Navigation.tsx        # Navigation component
│       ├── Counter.tsx           # useState example
│       ├── EffectExample.tsx     # useEffect example
│       ├── ContextExample.tsx    # useContext example
│       ├── ReducerExample.tsx    # useReducer example
│       ├── RefExample.tsx        # useRef example
│       ├── MemoExample.tsx       # useMemo example
│       ├── CallbackExample.tsx   # useCallback example
│       ├── Greeting.tsx          # Basic component
│       └── TodoList.tsx          # Combined hooks example
├── public/                       # Static assets
├── react-router.config.ts        # React Router configuration
├── vite.config.ts                # Vite configuration
└── package.json                  # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher)
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

- `npm run dev` - Start the React Router development server with hot-reload
- `npm run build` - Build the production-ready application
- `npm run start` - Serve the production build
- `npm run typecheck` - Generate route types and run TypeScript checks

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

## 🌐 Routes

- **`/`** - Home page with all React hook examples
- **`/about`** - About page with course information

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **React Router 7.9** - Framework mode routing with SSR support
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7.2** - Fast build tool and dev server
- **ESLint** - Code linting and quality

## 🎓 Learning Path

1. Start with **Counter** to understand basic state
2. Move to **EffectExample** for side effects
3. Explore **ContextExample** for global state
4. Learn **ReducerExample** for complex state logic
5. Practice **RefExample** for DOM manipulation
6. Optimize with **MemoExample** and **CallbackExample**
7. Combine everything in **TodoList**
8. Experiment with **React Router 7 framework mode** features:
   - Add data loaders to routes
   - Create actions for form handling
   - Enable SSR by setting `ssr: true`
   - Create dynamic routes with parameters

## 💡 Tips

- Each component is self-contained and can be studied independently
- Open the browser console to see example logging and debugging output
- Modify the code and see hot-reload in action
- Read inline comments for detailed explanations
- Explore `app/routes.ts` to see how routes are configured
- Check out `app/root.tsx` to understand the layout structure

## 🚀 React Router Framework Mode Features

This project uses **React Router 7 framework mode**, which provides:

- **Configuration-based routing** - Define routes in `app/routes.ts`
- **File-based route modules** - Each route is a separate module with enhanced capabilities
- **Type safety** - Auto-generated types for route parameters and loader data
- **Data loading** - Built-in `loader` functions for fetching data
- **Actions** - Built-in `action` functions for form handling and mutations
- **SSR support** - Server-side rendering capabilities (currently disabled, can be enabled)
- **Code splitting** - Automatic route-based code splitting
- **Production server** - Built-in production server with `@react-router/serve`

## 📝 License

This project is created for educational purposes.

## 🤝 Contributing

Feel free to fork this project and add your own examples or improvements!

---

**Happy Learning! 🚀**
