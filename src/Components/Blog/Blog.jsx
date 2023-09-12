
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
console.log(blog);


    const {} = blog
    return (
        <div>
            
        </div>
    );
};

Blog.prototypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;