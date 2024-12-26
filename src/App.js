import React from 'react';
import Header from './components/Header';
import BookList from './components/booklistookList';
import BookForm from './components/bookForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BookForm />
      <BookList />
    </div>
  );
};

export default App;
