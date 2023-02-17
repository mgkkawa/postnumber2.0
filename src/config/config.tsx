import React from 'react'
import ReactDOM from 'react-dom/client'
import { setConfig } from '../modules'
import App from './App'
import { FormTest } from './FormTest'

const container = document.getElementById('config-root') as HTMLElement
const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <FormTest />
  </React.StrictMode>,
)

// setConfig({
//   zipcode: 'Zipcode',
//   settings: [
//     {
//       field: 'Prefectures',
//       key: 'address1',
//     },
//     {
//       field: 'Cities',
//       key: 'address2',
//     },
//     {
//       field: 'Streets',
//       key: 'address3',
//     },
//   ],
// })
