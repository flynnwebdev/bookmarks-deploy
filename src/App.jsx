import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import BookmarkList from './components/BookmarkList';
import { BookmarkContext } from './providers/BookmarkProvider';

function App() {
  const { fetchBookmarks } = useContext(BookmarkContext)

  useEffect(() => { //
    fetchBookmarks()
  }, [])

  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <h1>Home Page</h1>} />
      <Route exact path="/bookmarks" component={BookmarkList} />
    </BrowserRouter>
  )
}

export default App;
