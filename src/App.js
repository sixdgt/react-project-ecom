import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Registration from './pages/Registration';
import Header from './components/Header'
import Footer from './components/Footer'

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
      </Routes>
    </main>
    <Footer />
    </div>
  );
}
export default App;
