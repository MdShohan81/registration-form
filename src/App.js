import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Contact';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/product' element={<Product></Product>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
    </div>
  );
}

export default App;
