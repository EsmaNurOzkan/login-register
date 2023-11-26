import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();

  console.log("user", user);

  return (
    <div className="App"> 
      {isLoading ? <p>Loading...</p>
      :isAuthenticated
        ? <button onClick={logout} >Logout</button>
        : <button onClick={loginWithRedirect} >Login</button>
      }
      {
        isAuthenticated && (<div>
          <img src={user.picture} alt={user.name} />
          <h2> {user.name} </h2>
          <p> {user.email} </p>
        </div>)
      }
    </div>
  );
}

export default App;
