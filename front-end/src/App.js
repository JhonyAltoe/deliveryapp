import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MyProvider from './context/MyProvider';

import Register from './components/Register';
import ClientPage from './pages/ClientPage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <div>
<<<<<<< HEAD
      <MyProvider>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={ LoginPage } />
          <Route path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ ClientPage } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </MyProvider>

=======
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={ LoginPage } />
        <Route path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ ClientPage } />
        <Route exact path="/customer/checkout" component={ CheckoutPage } />
        <Route path="*" component={ NotFound } />
      </Switch>
>>>>>>> main-group-20
    </div>
  );
}

export default App;
