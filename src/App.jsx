
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks,setBookmarks]= useState([]);
  const [readingTimes,setReadingTimes] = useState(0)

  const handleAddBookmarks = blog =>{
    const newbookmarks = [...bookmarks,blog]
    setBookmarks(newbookmarks)
  }
const handleMarkAsRead = time =>{
 const newReadTime=readingTimes+time;
 setReadingTimes(newReadTime)
}

  return (
    <>
    <Header></Header>
  <div className='md:flex mx-auto max-w-6xl'>
  <Blogs handleAddBookmarks={handleAddBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
  <Bookmarks bookmarks={bookmarks} readingTimes={readingTimes}></Bookmarks>
  </div>
        
    </>
  )
}

export default App
