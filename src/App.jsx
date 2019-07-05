import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import BookmarkList from './components/BookmarkList';
import { BookmarkContext } from './providers/BookmarkProvider';
import { AuthContext } from './providers/AuthProvider';
import LoginForm from './components/LoginForm';

function App() {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <h1>Home Page</h1>} />
      <Route exact path="/bookmarks" render={() => (
        isLoggedIn ? <BookmarkList /> : <Redirect to="/login" />
      )} />
      <Route exact path="/login" render={() => (
        isLoggedIn ? <Redirect to="/bookmarks" /> : <LoginForm />
      )} />
    </BrowserRouter>
  )
}

export default App;
