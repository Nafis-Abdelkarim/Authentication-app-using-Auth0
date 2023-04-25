import './App.css';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <>
    <LoginButton/>
    <LogoutButton/>
    <h3>The users information is below!</h3>
    <UserProfile/>
    </>
  );
}

export default App;
