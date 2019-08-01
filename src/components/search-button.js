import React from 'react'

function SearchButton({ handleQuerySearch }) {
  return (
    <button
      style={{
        backgroundColor: '#3F00D3',
        color: 'white',
        alignSelf: 'flex-start',
        width: '95%',
        borderRadius: '0.35rem',
        marginBottom: '1rem',
        padding: '0.85rem 2rem',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        textRendering: 'optimizeLegibility'
      }}
      onClick={handleQuerySearch}
    >
      Search
    </button>
  )
}

export { SearchButton }