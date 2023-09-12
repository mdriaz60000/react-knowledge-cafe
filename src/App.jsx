
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
    <Header></Header>
  <div className='md:w-1/3'>
  <Blogs></Blogs>
  <Bookmarks></Bookmarks>
  </div>
        
    </>
  )
}

export default App
