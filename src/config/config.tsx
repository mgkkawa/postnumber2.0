import React from 'react'
import ReactDOM from 'react-dom/client'
import { getConfig } from '../common'
import App from './App'

const container = document.getElementById('config-root') as HTMLElement
const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <App {...getConfig(kintone.$PLUGIN_ID)} />
  </React.StrictMode>,
)
