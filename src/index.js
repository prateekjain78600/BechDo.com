import { BrowserRouter } from 'react-router-dom';
import React from 'react'
// to create React JSX

import ReactDom from 'react-dom/client'
// to Render JSX
import App from './App';
// rendering as per react 18
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
) 