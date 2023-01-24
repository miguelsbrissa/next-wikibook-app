import React from 'react'
import Menu from '../Menu/menu'
import { BookCard } from '../Book/card'

const SingleCategorie = ({ data }) => {
  return (
    <div className={'cat'}>
      <div className={'cat__header'}>
        <Menu />
      </div>
      <div className={'cat__content'}>
        {
          data.map(book => (
            <BookCard key={book.name} data={book} />
          ))
        }
      </div>
    </div>
  )
}

export default SingleCategorie