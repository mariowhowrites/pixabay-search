import React from 'react'

function CategorySelect({ handleCategoryInput }) {
  const categories = [
    'Fashion',
    'Nature',
    'Backgrounds',
    'Science',
    'Education',
    'People',
    'Feelings',
    'Religion',
    'Health',
    'Places',
    'Animals',
    'Industry',
    'Food',
    'Computer',
    'Sports',
    'Transportation',
    'Travel',
    'Buildings',
    'Business',
    'Music'
  ]

  return (
    <div>
      <label htmlFor="category" style={{ display: 'none' }}>
        Category
      </label>
      <select
        name="category"
        id="category"
        onChange={handleCategoryInput}
        style={{
          backgroundColor: '#FDFDFD',
          borderRadius: '0.2rem',
          border: '2px #E0E1E0 solid',
          padding: '0.5rem 0 0.5rem 0.75rem',
          fontStyle: 'italic',
          width: '95%',
          marginBottom: '1rem'
        }}
      >
        <option value="" style={{ padding: '1.5rem 0 0.5rem 0.75rem' }}>
          Category...
        </option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  )
}

export { CategorySelect }
