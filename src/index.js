import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Button from '/Componentes/Button';
//import Button2 from './Componentes/Button2';
//import Texto from './Componentes/Texto';
//import Button3 from './Componentes/Button3';
//import Imagen from './Componentes/Pic';
//import App from './App';
import Menu from './Componentes/Menu';
import Header from '../src/Componentes/Header';
import * as serviceWorker from './serviceWorker';
import Presentacion from './Componentes/Presentacion'
import Portafolio from './Componentes/Portafolio';
import Blog from './Componentes/Blog';
import Me from './Componentes/Me';
import Testimonios from './Componentes/Testimonios';
import Servicios from './Componentes/Servicios';
import BlogMe from './Componentes/BlogMe';
import Contacto from './Componentes/Contacto';
import Copyright from './Componentes/Copyright';
import Redes from './Componentes/Redes';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Header />
    <Presentacion />
    <Portafolio />
    <Blog /> 
    <Me />
    <Testimonios />  
    <Servicios />  
    <BlogMe />
    <Contacto />    
    <Redes />
    <Copyright />
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

