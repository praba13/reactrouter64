import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <nav>
            <h1>PR-Router</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            {/* /about  / not necessary*/}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
