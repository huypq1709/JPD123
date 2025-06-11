import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import từ 'react-dom/client'
import { App } from './App';

// Sử dụng API createRoot mới
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}