import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '~/assets/images';
// import Route from '~/routes/Route';
// import { Timeline } from '~/app/pages';

export default function Main(props) {
  const [buttonBooks, setButtonBooks] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('@Lebook:TOKEN'));

    if (user.role === 'author') setButtonBooks(true);
  }, []);

  const handleExit = () => {
    localStorage.removeItem('@Lebook:TOKEN');
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

      {/* <Switch>
        <Route path="/" exact component={Timeline} />
      </Switch> */}
    </React.Fragment>
  );
}
