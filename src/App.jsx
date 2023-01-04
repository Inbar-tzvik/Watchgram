import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AppHeader } from './components/AppHeader'
import { AppFooter } from './components/AppFooter'
import { Home } from './pages/Home'
import { StoryApp } from './pages/StoryApp'

export default function App() {
  // onChangePage = (page) => {
  //   this.setState({ page })
  // }

  return (
    <Router>
      <AppHeader />
      <section className="app-container container flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<StoryApp />} />
          </Routes>
        </main>
        <AppFooter />
      </section>
    </Router>
  )
}
