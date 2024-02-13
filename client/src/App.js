import logo from './logo.svg';
import NavigationBar from './components/global/NavigationBar';
import Home from './components/home/Home';
import Footer from './components/global/Footer';

function App() {
  return (
    <div className='flex flex-col h-screen w-full min-h-screen min-w-full bg-green-100'>
        <div className='flex-1 bg-inherit' id='main-content'>
            <NavigationBar />
            <Home />
        </div>
        <div className='bg-inherit'>
            <Footer />
        </div>
    </div>
  );
}

export default App;
