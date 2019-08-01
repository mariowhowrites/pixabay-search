import React from 'react'

function KeywordSearch({ handleQueryInput }) {
  return (
    <div>
      <label htmlFor="keyword" style={{ display: 'none' }}>
        Keyword
      </label>
      <input
        type="text"
        name="keyword"
        id="keyword"
        placeholder="Keyword..."
        onChange={handleQueryInput}
        style={{
          backgroundColor: '#FDFDFD',
          borderRadius: '0.25rem',
          border: '2px #E0E1E0 solid',
          padding: '0.5rem 0 0.5rem 0.75rem',
          fontStyle: 'italic',
          width: '95%',
          marginBottom: '1rem',
          boxSizing: 'border-box'
        }}
      />
    </div>
  )
}

export { KeywordSearch }
