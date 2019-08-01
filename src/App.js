import React from 'react'
import { PixabaySearch } from './components/pixabay-search'

function App() {
  const apiKey = '13136421-266c28a6d61717bc2e4e6a83e'

  return (
    <div className="App" style={{ margin: '0 3rem' }}>
      <h1>Pixabay Search</h1>
      <PixabaySearch apiKey={apiKey} />
    </div>
  )
}

export default App
