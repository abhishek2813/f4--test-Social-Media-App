//Importing things to app.js
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './state/actions';
import Home from './components/Home';
import Item from './components/Item';
import NotFound from './components/NotFound';

// Create a Function
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts()); // calling fetchPosts()
  }, [dispatch]);

  return (

    <div className="container">
      <h1 className="text-center">Social Media App</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/item/:id" element={<Item />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
