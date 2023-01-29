import React from 'react'
import Followers from './components/followers/Followers'
import Header from './components/header/Header'
import Overview from './components/overview/Overview'

function App () {
  return (
    <>
      <Header />
      <main
        className='grid gap-y-16 mx-6 mt-52 mb-16 lg:mt-36 xl:mx-auto'
      >
        <Followers />
        <Overview />
      </main>
    </>
  )
}

export default App
