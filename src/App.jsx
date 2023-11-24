import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Layout from './components/Layout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
