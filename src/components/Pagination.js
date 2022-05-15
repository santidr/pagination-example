import React from 'react'

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {

    let pageNumbers = []

    for (let i = 1; i <= Math.round(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="mt-4">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    { pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a 
                                className="page-link"
                                href="!#"
                                onClick={ () => paginate(number) }
                            >
                                { number }
                            </a>
                        </li>
                    )) }
                </ul>
            </nav>
        </div>
    )
}

export default Pagination