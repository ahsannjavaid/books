import React from 'react'

const Card = ({id, title, author, year}) => {
    const DeleteBook = async(ID) => {
        await fetch(`http://localhost:5000/api/v1/books/delete/${ID}`, {
            method: "delete"
        }).then((res) => {
            console.log(res.json())
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="card border rounded shadow mb-3 text-center" style={{ width: '14rem', height: '14rem' }}>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5><hr />
                    <h6 className="card-title">{author}</h6>
                    <p className="card-text"><b>{year}</b> AD</p>
                    <button onClick={() => DeleteBook(id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </>
    )
}

export default Card