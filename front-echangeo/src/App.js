import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getExperiences } from './Fetch/test';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function getData() {
      const usersData = await getExperiences()
      setUsers(usersData)
    }
    getData()
  }, [])

  console.log(users);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ciao {users.name}

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
