import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
//import fakeApi from '../components/fakeApi'
import api from '../services/api'

export default function ListLivros(props) {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async e => {
            const user = await api.get(`/users/${localStorage.getItem('@Login:username')}`)

            if(user.data[0].type === 'leitor'){
                props.history.push('/browse')
                return
            }

            const response = await api.get(`/books/author/${user.data[0]._id}`)
            setBooks(response.data)
        }

        fetchData()
    }, [props]);

    const handleDelete = async id => {

        const livroAtual = books.filter(book => book._id === id )[0]

        let question = window.confirm(`Tem certeza q deseja deletar ${livroAtual.name} ?`);

        if (question !== true) return

        const bookDeleted = await api.delete(`/books/${id}`)

        setBooks(books.filter(book => book._id !== bookDeleted.data._id))
    }

    return (
        <div className="container pt-5">
            <Link to="/browse/pub" className="btn btn-secondary mb-5">Publicar Livro</Link>
            <table className="table table-hover mb-5">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nome</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Idioma</th>
                        <th scope="col">Paginas</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        books.length > 0 && (
                            books.map(book => (
                                <tr key={book._id}>
                                    <th><img src={book.image} height={40} alt="Livro"/></th>
                                    <td>
                                        <a href={book.document} target="_blank" rel="noopener noreferrer">
                                            {book.name}
                                        </a>
                                    </td>
                                    <td>{book.genre}</td>
                                    <td>{book.language}</td>
                                    <td>{book.pages}</td>
                                    <td>
                                        <Link to={`/browse/edit/${book._id}`} className="btn btn-primary mr-3">Editar</Link>
                                        <button type="button" className="btn btn-danger"
                                            onClick={handleDelete.bind(this, book._id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
