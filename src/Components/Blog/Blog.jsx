import { BsBookmark } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Blog = ({blog,handleAddBookmarks}) => {
console.log(blog);


    const {title,cover,author_img,reading_time,author,posted_date,hashtags} = blog
    return (
        <div className='mb-20'>
            <img className="w-full mb-8" src={cover} alt={`cover picture of the title ${title}`} />
            <div className="flex justify-between items-center mb-8">
                <div className="flex">
<img className='w-14' src={author_img} alt="" />
<div className='ml-6'>
    <h3>{author}</h3>
    <p>{posted_date}</p>

</div>

                </div>
                <div>
<span>{reading_time} min read <button onClick={()=>handleAddBookmarks(blog)} className='ml-2 text-2xl text-red-600'><BsBookmark></BsBookmark></button></span>
                </div>
            </div>
            <h3 className='text-4xl'>{title}</h3>
            <p>
                {
                    hashtags.map((hash,idx) =><span key={idx} ><a href="">#{hashtags}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.prototypes ={
    blog: PropTypes.object.isRequired,
    handleAddBookmarks:PropTypes.func
}

export default Blog;