// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom'

// 1. 'root'というidを持つHTML要素を取得
const rootElement = document.getElementById('root')! 

// 2. その要素にReactの描画を開始
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)