import React, { useState } from 'react'

import { SearchColumn } from './search-column'
import { SavedResultsColumn } from './saved-results-column'

function PixabaySearch({ apiKey }) {
  const [savedResults, setSavedResults] = useState([])

  const handleResultSave = function(result) {
    const newResults = Array.from(new Set([...savedResults, result]))

    setSavedResults(newResults)
  }

  const handleResultDelete = function(result) {
    const newResults = savedResults.filter(
      savedResult => savedResult.id !== result.id
    )

    setSavedResults(newResults)
  }

  return (
    <main style={{ display: 'flex' }}>
      <SearchColumn
        apiKey={apiKey}
        handleResultSave={handleResultSave}
        handleResultDelete={handleResultDelete}
      />
      <SavedResultsColumn savedResults={savedResults} />
    </main>
  )
}

export { PixabaySearch }
