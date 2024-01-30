import React from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'

const AddBook = () => {
    let [title, setTitle] = useState('')
    let [author, setAuthor] = useState('')
    let [year, setYear] = useState()
    const AddItem = async(event) => {
        event.preventDefault()
        await fetch("http://localhost:5000/api/v1/books/add-new", {
            method: 'post',
            body: JSON.stringify({ title, author, publicationYear: year }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res.json())
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <Layout>
            <form className='form' onSubmit={(event) => AddItem(event)}>
                <input className='form-control mb-2 form-w' onChange={(event) => setTitle(event.target.value)} type={"text"} placeholder="Book Title" />
                <input className='form-control mb-2' onChange={(event) => setAuthor(event.target.value)} type={"text"} placeholder="Author" />
                <input className='form-control' onChange={(event) => setYear(event.target.value)} type={"number"} placeholder="Publication Year" />
                <button className='btn btn-primary btn-block' type='submit'>Add</button>
            </form>
        </Layout>
    )
}

export default AddBook