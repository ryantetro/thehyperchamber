import './style.css'
import { App } from './components/App.js'

// Initialize the application
document.querySelector('#app').innerHTML = App()

// Import and initialize any additional modules
import './utils/analytics.js'
