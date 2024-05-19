import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Editor from './components/editor/Editor';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
