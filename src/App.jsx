import { useEffect } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUSers } from './store/slices/usersSlice/thunks';

function App() {
  const dispatch = useDispatch();

  const { isLoading, users = [], page } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUSers());
  }, []);

  return (
    <div className="App">
      <div className="header">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Redux toolKit</h1>
      </div>
      <div className="row">
        <h3>Users</h3>
        <button onClick={() => dispatch(getUSers(page))}> Next</button>
      </div>
      <hr />
      <h3>Loading: {isLoading ? 'true' : 'false'}</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
