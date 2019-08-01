import React, { useState } from 'react';
import close from '../assets/images/close.png'

export default function Book(props) {

    const [modal, setModal] = useState(false)

    const { book, author } = props

    const style = {
        photoBook: {
            backgroundImage: `url('${book.image}')`,
        },
        close: {
            backgroundImage: `url('${close}')`,
        }
    }

    const handleModalOn = e => {
        document.body.className += 'overflow-hidden'
        setModal(true)
    }

    const handleModalOff = e => {
        document.body.className = ''
        setModal(false)
    }

    return (
        <React.Fragment>
            <div className="book-single" style={style.photoBook} onClick={handleModalOn}>
                <div className="name">
                    {book.name}
                </div>
            </div>

            { modal && (
                <div className="modal-book">
                    <div className="modal-b-body d-flex">
                        <span style={style.close} onClick={handleModalOff}></span>
                        <div className="image-book" style={style.photoBook}></div>
                        <div className="infos">
                            <div className="top">
                                <h2>{book.name}</h2>
                                <div className="middle scroll-person">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h5>Descricao</h5>
                                            <p>
                                                {book.description}
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Genero</h5>
                                            <p>
                                                {book.genre}
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Autor</h5>
                                            <p>
                                                {author.name}
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Data de publicacao</h5>
                                            <p>
                                                {book.publicationDate}
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Idioma</h5>
                                            <p>
                                                {book.language}
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Paginas</h5>
                                            <p>
                                                {book.pages}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <a href={book.document} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Leia agora</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}
