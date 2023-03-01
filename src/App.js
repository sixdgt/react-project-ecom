import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Registration from './pages/Registration';
import ProductDesc from './pages/ProductDesc';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About';

function App() {
  return (
    <div className="App">
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login 
          text={'Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been the industry'}
          maxLength={12} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/product' element={<ProductDesc />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </main>
    <Footer />
    </div>
  );
}
export default App;
