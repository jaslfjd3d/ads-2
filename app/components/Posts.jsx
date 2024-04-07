import React from 'react'
import Post from './Post'

const Posts = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Posts