import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          exact
          element={<Layout />}
        >
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/cart'
            element={<Cart />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
