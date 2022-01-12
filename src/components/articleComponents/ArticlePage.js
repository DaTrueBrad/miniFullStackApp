import axios from 'axios'
import React, {useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'

function ArticlePage() {
  const [data, setData] = useState()
  
  const getData = async () => {
    await axios.get('http://localhost:4000/getArticles')
    .then((res) => setData(res.data[0]))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>Articles</h1>
      <div className='card-container'>
       {!data ? <p>loading</p> : data.map((element, index) => {
        return <ArticleCard title={element.title} author={element.author} desc={element.description} url={element.url} />
      }
      )} 
      </div>
      
    </div>
  )
}

export default ArticlePage
