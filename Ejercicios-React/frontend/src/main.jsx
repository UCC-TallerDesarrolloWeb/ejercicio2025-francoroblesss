import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Login from './login.jsx'
import Actividades from './Activities.jsx'
import Layout from './Layout.jsx';
import Home from './Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }></Route>
        <Route index element={ <Home /> }></Route>
        <Route path="/" element={<Login />} />
        <Route path="/actividades" element={<Activities />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
