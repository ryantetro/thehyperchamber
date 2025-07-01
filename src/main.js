import './style.css'
import { App } from './components/App.js'
import './utils/analytics.js'
import { inject } from '@vercel/analytics'

// Initialize Vercel Analytics
inject()

// Initialize the application
document.querySelector('#app').innerHTML = App()
