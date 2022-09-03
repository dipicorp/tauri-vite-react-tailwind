import { invoke } from '@tauri-apps/api'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './tailwind.output.css'

invoke('greet', { name: "ahihi" })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
