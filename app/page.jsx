import React from 'react'
import Posts from './components/Posts'

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-0 md:col-span-2">
        </div>
        <div className="col-span-12 md:col-span-8">
          <Posts />
          <Posts />
          <Posts />
        </div>
        <div className="col-span-0 md:col-span-2">
        </div>
      </div>
    </div>
  )
}

export default Home