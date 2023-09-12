
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTimes}) => {

  return (
    <div className="md:w-1/3">
      <div>
        <h3>readingTime:{readingTimes}</h3>
      </div>
    <h3>bookmarked blogs:{bookmarks.length}</h3>
     {
        bookmarks.map(bookmark=><Bookmark key={bookmark.id}  bookmark={bookmark}></Bookmark>)
    } 
</div>
  )
}

Bookmarks.propTypes = {
bookmarks:PropTypes.array,
readingTimes:PropTypes.number
}

export default Bookmarks
