

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <h3>bookmarked blogs:{bookmarks.length}</h3>
        </div>
    );
};

export default Bookmarks;