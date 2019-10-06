import React, { useState, useEffect } from 'react';
import Book from 'App/components/Book';
import api from '~/services/api';
import { Container } from './styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';

export default function Timeline() {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [bookSelect, setBookSelect] = useState({});
  const [urlCloud, setUrlCloud] = useState('');

  const handleClickOpen = book => {
    setBookSelect(book);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setUrlCloud(process.env.REACT_APP_CLOUD_URL);

    const fetchData = async e => {
      const response = await api.get('/books');
      setBooks(response.data);

      const responseUsers = await api.get('/users');
      setUsers(responseUsers.data);
    };

    fetchData();
  }, []);

  const handleAuthor = idAuthorBook => {
    const authorBook = users.filter(user => user._id === idAuthorBook);
    if (authorBook[0]) return authorBook[0].name;
  };

  return (
    <Container>
      <div className="container">
        <div className="row">
          {books.map((book, index) => (
            <Book
              key={String(index)}
              book={book}
              author={handleAuthor(book.idAuthor)}
              onClick={() => handleClickOpen(book)}
            />
          ))}
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{bookSelect.name}</DialogTitle>
        <DialogContent>
          <p>{bookSelect.description}</p>
          <div className="row">
            <div className="col-md-4">
              <h5>Author</h5>
              <p>{handleAuthor(bookSelect.idAuthor)}</p>
            </div>
            <div className="col-md-4">
              <h5>Genre</h5>
              <p>{bookSelect.genre}</p>
            </div>
            <div className="col-md-4">
              <h5>Data</h5>
              <p>{bookSelect.publicationDate}</p>
            </div>
            <div className="col-md-4">
              <h5>Language</h5>
              <p>{bookSelect.language}</p>
            </div>
            <div className="col-md-4">
              <h5>Pages</h5>
              <p>{bookSelect.pages}</p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <a
            className="btn btn-success"
            href={`${urlCloud}/${bookSelect.keyDocument}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read
          </a>
          <a
            className="btn btn-primary"
            href={`${urlCloud}/${bookSelect.keyDocument}`}
            download
          >
            Download
          </a>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
