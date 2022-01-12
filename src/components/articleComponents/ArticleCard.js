import React from 'react'

function ArticleCard(props) {
  return (
    <div className='article-card'>
      <div className='card-text-container'>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <p>Author: {props.author}</p>
      </div>
      <div className='card-button-container'>
        <button>Favorite</button>
        <a href={props.url}><button>View</button></a>
      </div>
    </div>
  )
}

export default ArticleCard
