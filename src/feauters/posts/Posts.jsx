import { useSelector } from "react-redux";

import React from 'react'

const Posts = () => {

    const posts = useSelector(state => state.posts);


    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <p>{post.id}</p>
                    <p>{post.descr}</p>
                </div>
            ))}
        </div>
    )
}

export default Posts