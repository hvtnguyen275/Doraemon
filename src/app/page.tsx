'use client';
import './page.module.css';
// import { Route, Routes, useRoutes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import LetterToLongHa from './pages/Letter';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/longha-25" element={<LetterToLongHa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
