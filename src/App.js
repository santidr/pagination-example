import React, { useEffect, useState } from 'react'
import Pagination from './components/Pagination'
import Posts from './components/Posts'

const App = () => {

    const [ posts, setPosts] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ postsPerPage ] = useState(10)

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await resp.json()

            setPosts(data)
            setLoading(false)
        }

        fetchData()
    }, [])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="container mt-4">
            <h2>My posts</h2>

            <Posts posts={ currentPosts } loading={ loading } />

            <Pagination
                totalPosts={ posts.length }
                postsPerPage={ postsPerPage }
                paginate={ paginate } />
        </div>
    )
}

export default App