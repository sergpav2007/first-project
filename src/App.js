import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Articles from "./pages/Articles";
import Comment from './pages/Comment';
import Card from './pages/Card';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}>
        <Route path="/" Component={Articles} />
        <Route path="/articles/:id" Component={Card} />
        <Route path="/comment" Component={Comment} />
      </Route>
    </Routes>
  );
}

export default App;
