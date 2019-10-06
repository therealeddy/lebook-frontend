import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from '@material-ui/core';

export default function Book(props) {
  const [urlCloud, setUrlCloud] = useState('');
  const { book, onClick } = props;

  useEffect(() => {
    setUrlCloud(process.env.REACT_APP_CLOUD_URL);
  }, []);

  const useStyles = makeStyles({
    card: {
      width: '100%',
      height: '100%'
    },
    media: {
      height: 140
    }
  });

  const classes = useStyles();

  function minifyString(string) {
    if (string.length > 110) return string.substring(0, 110).concat('...');
    return string;
  }

  return (
    <div className="col-md-3 mb-4">
      <Container>
        <CardActionArea className={classes.card}>
          <Card className={classes.card} onClick={onClick}>
            <CardMedia
              className={classes.media}
              image={`${urlCloud}/${book.keyImage}`}
              title={book.name}
            />
            <CardContent>
              <h5>{book.name}</h5>
              <p className="desc-card">{minifyString(book.description)}</p>
            </CardContent>
          </Card>
        </CardActionArea>
      </Container>
    </div>
  );
}
