import logo from './logo.svg';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex-col h-screen w-full bg-green-100'>
        <div>
            <NavigationBar />
        </div>
        <div>
            <Home />
        </div>
        <div className=''>
            <Footer />
        </div>
        
    </div>
  );
}

export default App;
