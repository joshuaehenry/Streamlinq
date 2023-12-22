import './App.css';
import NavigationBar from './components/navigationbar';

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <NavigationBar />
    </div>
  );
}

export default App;