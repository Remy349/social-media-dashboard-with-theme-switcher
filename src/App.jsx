import React from 'react'
import Followers from './components/followers/Followers'
import Overview from './components/overview/Overview'

function App () {
  return (
    <main className='grid gap-y-16 mx-7 mt-12 mb-16'>
      <Followers />
      <Overview />
    </main>
  )
}

export default App
