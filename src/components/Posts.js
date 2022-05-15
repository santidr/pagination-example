import React from 'react'

const Posts = ({ posts, loading }) => {
    return (
        <>
            { loading && <h4>Loading...</h4> }

            <ul className="list-group mt-4">
                { posts.map((post) => (
                    <li key={ post.id } className="list-group-item">{ post.title }</li>
                ))}   
            </ul>
        </>
    )
}

export default Posts