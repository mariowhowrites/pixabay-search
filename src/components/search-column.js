import React, { useState } from 'react'
import axios from 'axios'

import { SearchResult } from './search-result'
import { KeywordSearch } from './keyword-search'
import { CategorySelect } from './category-select'
import { SearchButton } from './search-button'
import mockData from '../mockData.json'

function SearchColumn({ apiKey, handleResultSave, handleResultDelete }) {
  const [keywordQuery, setKeywordQuery] = useState('')
  const [category, setCategory] = useState('')
  const [searchResults, setSearchResults] = useState(mockData.hits.slice(0, 3))

  const handleCategoryInput = function(event) {
    setCategory(event.target.value)
  }

  const handleQueryInput = function(event) {
    setKeywordQuery(event.target.value)
  }

  const handleQuerySearch = async function() {
    const params = {
      q: keywordQuery,
      key: apiKey
    }

    if (category !== '') {
      params.category = category.toLowerCase()
    }

    const response = await axios.get('https://pixabay.com/api/', {
      params
    })

    if (response) {
      setSearchResults(response.data.hits)
    }
  }

  return (
    <section style={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
      <KeywordSearch handleQueryInput={handleQueryInput} />
      <CategorySelect handleCategoryInput={handleCategoryInput} />
      <SearchButton handleQuerySearch={handleQuerySearch} />
      <SearchResults
        searchResults={searchResults}
        handleResultSave={handleResultSave}
        handleResultDelete={handleResultDelete}
      />
    </section>
  )
}

export { SearchColumn }

function SearchResults({
  searchResults,
  handleResultSave,
  handleResultDelete
}) {
  if (searchResults.length === 0) {
    return <h4>Search to see results</h4>
  }

  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      {searchResults.map(result => (
        <SearchResult
          result={result}
          handleResultSave={handleResultSave}
          handleResultDelete={handleResultDelete}
          key={result.id}
        />
      ))}
    </section>
  )
}
