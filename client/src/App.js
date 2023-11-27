import './App.css';
import NavigationBar from './components/navigationbar';
import LoginForm from './components/login';

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <NavigationBar />
      <LoginForm className="content"/>
    </div>
  );
}

export default App;
