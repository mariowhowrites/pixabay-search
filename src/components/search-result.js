import React, { useState } from 'react'

/**
 * Result has following tags:
 *
 * * likes
 * * favorites
 * * largeImageURL
 * * tags
 * * id
 */
function SearchResult({ result, handleResultSave, handleResultDelete }) {
  const [isSaved, setIsSaved] = useState(false)

  const handleSaveToggle = function(result) {
    if (isSaved) {
      handleResultDelete(result)
    } else {
      handleResultSave(result)
    }

    setIsSaved(!isSaved)
  }

  const tags = result.tags.split(', ')

  return (
    <article style={{ display: 'flex', marginBottom: '3rem', width: '85%' }}>
      <ResultImage
        result={result}
        isSaved={isSaved}
        handleSaveToggle={handleSaveToggle}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingLeft: '1rem'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <span
              key={tag}
              style={{
                backgroundColor: '#62AE97',
                color: 'white',
                fontWeight: 'semi-bold',
                marginRight: '0.5rem',
                marginBottom: '0.75rem',
                padding: '0.2rem 1rem'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>
            {result.likes}{' '}
            <span role="img" aria-label="Likes">
              &#128077;
            </span>
          </span>
          <span>
            {result.favorites}{' '}
            <span role="img" aria-label="Favorites">
              &#11088;
            </span>
          </span>
        </div>
      </div>
    </article>
  )
}

export { SearchResult }

function ResultImage({ result, isSaved, handleSaveToggle }) {
  const backgroundColor = isSaved ? '#D69345' : '#AB506D'
  const [isHovered, setIsHovered] = useState(false)

  const toggleHover = function() {
    setIsHovered(!isHovered)
  }

  return (
    <div
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      style={{ width: '60%', position: 'relative', flexShrink: 0 }}
    >
      <img
        src={result.largeImageURL}
        alt="search result"
        style={{ width: '100%' }}
        onClick={() => handleSaveToggle(result)}
      />
      {(isHovered || isSaved) && (
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            color: 'white',
            height: '20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor
          }}
        >
          {isSaved ? 'Saved' : 'Save'}
        </div>
      )}
    </div>
  )
}
