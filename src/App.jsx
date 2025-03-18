import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import HeaderFooterLayout from './layouts/HeaderFooterLayout';
import About from './screens/About';
import CartDetails from './screens/CartDetails';

const App = () => {
  return (
    <Provider store={store}>
      <Router future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
        <Routes>
          <Route path="/" element={<HeaderFooterLayout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="cart-details" element={<CartDetails />} />
          </Route>
          <Route path="*" element={<h1>404 page not found.</h1>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
