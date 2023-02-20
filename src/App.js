import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </main>
    <Footer />
    </div>
  );
}
export default App;
