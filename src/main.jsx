import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
//import { FirstApp } from './FirstApp';

import './styles.css';
//import { CounterApp } from './CounterApp';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={20}  />
        {/* <FirstApp title="Hola, Soy Goku"/> */}
    </React.StrictMode>
);
// Renderizar FirstApp con un prop 'title'

