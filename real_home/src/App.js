import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Property from './components/Property';
import AllProperties from './components/AllProperties';
import AllBlogs from './components/AllBlogs';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/all/properties' element={<AllProperties />} />
          <Route exact path='/all/properties/:id' element={<Property />} />
          <Route exact path='/blogs' element={<AllBlogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
