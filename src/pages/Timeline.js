import React, { useState, useEffect } from 'react'
import Book from '../components/Book'
import api from '../services/api'

export default function Timeline() {

    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const fetchData = async e => {
            const response = await api.get('/books')
            setBooks(response.data)

            const responseUsers = await api.get('/users')
            setUsers(responseUsers.data)

        }
        
        fetchData()
    }, []);
    
    useEffect(() => {
        setTimeout(() => {
            setVisible(true)
        }, 1000)
    }, [users]);

    const handleAuthor = idAuthorBook => {
        const authorBook = users.filter(user => user._id === idAuthorBook)
        return authorBook[0]
    }

    return (
        <React.Fragment>
            {visible && (
                <div className="container d-flex justify-content-between flex-wrap">
                    { books.map(book => (
                        <Book key={book._id} book={book} author={handleAuthor(book.idAuthor)}/>
                    )) }
                </div>
            )}
        </React.Fragment>
    );
}