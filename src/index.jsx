import React from 'react'
import ReactDOM from 'react-dom'
import App from '@components/App/App'
import Layout from '@components/Layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Layout>
      <App />
    </Layout>
  </Router>,
  document.getElementById('Root')
)
