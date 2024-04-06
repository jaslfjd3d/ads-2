import React from 'react'
import Posts from './components/Posts'

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-0 md:col-span-2">
          <div id="pos-article-display-95426"></div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Posts />
          <div id="pos-article-display-95428"></div>
          <Posts />
          <div id="pos-article-display-95428"></div>
          <Posts />
        </div>
        <div className="col-span-0 md:col-span-2">
          <div id="pos-article-display-95427"></div>
        </div>
      </div>
    </div>
  )
}

export default Home