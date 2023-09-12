
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks,setBookmarks]= useState([]);

  const handleAddBookmarks = blog =>{
    const newbookmarks = [...bookmarks,blog]
    setBookmarks(newbookmarks)
  }

  return (
    <>
    <Header></Header>
  <div className='md:flex mx-auto max-w-6xl'>
  <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs>
  <Bookmarks bookmarks={bookmarks}></Bookmarks>
  </div>
        
    </>
  )
}

export default App
