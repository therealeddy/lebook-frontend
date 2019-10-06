import React, { useEffect, useState } from 'react';
import { Switch, Link } from 'react-router-dom';
import { Logo } from '~/assets/images';
import api from '~/services/api';
import Route from '~/routes/Route';
import { Timeline } from '~/app/pages';

export default function Main(props) {
  const [buttonBooks, setButtonBooks] = useState(false);

  useEffect(() => {
    const fetchData = async e => {
      const user = await api.get(
        `/users/${localStorage.getItem('@Login:username')}`
      );

      if (user.data[0].type === 'author') setButtonBooks(true);
    };

    fetchData();
  }, [props]);

  const handleExit = () => {
    localStorage.removeItem('@Login:username');
    props.history.push('/');
  };

  return (
    <React.Fragment>
      <div className="container d-flex justify-content-between align-items-center py-5">
        <Link to="/">
          <img src={Logo} height={40} alt="Lebook" />
        </Link>
        <div>
          {buttonBooks && (
            <Link to="/books" className="btn btn-primary mr-3">
              Your Books
            </Link>
          )}

          <button type="button" className="btn btn-danger" onClick={handleExit}>
            Exit
          </button>
        </div>
      </div>

      <Switch>
        <Route path="/" exact component={Timeline} />
      </Switch>
    </React.Fragment>
  );
}
