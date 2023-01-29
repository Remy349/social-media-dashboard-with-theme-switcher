import React, { useState, useEffect } from 'react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const userTheme = window.localStorage.getItem('theme')
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

  useEffect(() => {
    ;(userTheme && userTheme === 'dark') || (!userTheme && systemTheme)
      ? setDarkMode(true)
      : setDarkMode(false)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <header className='fixed z-10 top-0 left-0 w-full dark:bg-very-dark-blue'>
      <nav
        className='mx-6 flex justify-center flex-col h-48 gap-y-4
        lg:justify-between lg:flex-row lg:items-center lg:h-32 xl:mx-auto'
      >
        <div>
          <h1
            className='font-bold text-2xl mb-2 dark:text-white-color
            sm:text-3xl'
          >
            Social Media Dashboard
          </h1>
          <p
            className='font-bold text-sm dark:text-desaturated-blue
            sm:text-lg'
          >
            Total Followers: 23,004
          </p>
        </div>
        <hr className='dark:border-desaturated-blue lg:hidden' />
        <div className='flex justify-between items-center lg:gap-x-4'>
          <p className='font-bold dark:text-desaturated-blue sm:text-lg'>
            Dark Mode
          </p>
          <label htmlFor='checkbox' className='toggle-theme'>
            <input
              type='checkbox'
              id='checkbox'
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className='slider round' />
          </label>
        </div>
      </nav>
    </header>
  )
}

export default Header
