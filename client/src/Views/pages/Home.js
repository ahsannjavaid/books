import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'

const Home = () => {
    let [books, setBooks] = useState([])
    const GetBooks = async () => {
        let result = await fetch("http://localhost:5000/api/v1/books/get-all")
        if (result) {
            result = await result.json()
            setBooks(result.books)
        }
        else {
            console.log("Books not found.")
        }
    }
    useEffect(() => {
        GetBooks()
    }, [books])

    return (
        books
            ?
            <Layout>
                <div className='row'>
                    {
                        books.map((book) => {
                            return (
                                <div className='col d-flex justify-content-center' key={book._id}>
                                    <Card
                                        id={book._id}
                                        title={book.title}
                                        author={book.author}
                                        year={book.publicationYear}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </Layout>
            :
            <Layout>
                <div className='text-center p-5'>
                    Loading...
                </div>
            </Layout>
    )
}

export default Home