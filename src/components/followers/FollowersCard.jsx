import React from 'react'

const FollowersCard = ({
  socialName,
  username,
  statsNum,
  text,
  statsText,
  socialIcon,
  statsIcon,
  statsColor
}) => {
  return (
    <article
      className={`card card-${socialName} relative overflow-hidden
        shadow-md rounded-lg flex flex-col gap-y-7 items-center py-8
        dark:bg-dark-desaturated-blue`}
    >
      <div className='flex items-center gap-x-2'>
        <img className='w-6' src={socialIcon} alt='Icon social' />
        <p className='font-bold text-sm dark:text-desaturated-blue'>
          {username}
        </p>
      </div>
      <div>
        <h3 className='text-6xl mb-2 font-bold dark:text-white-color'>
          {statsNum}
        </h3>
        <p className='card-text text-sm uppercase dark:text-desaturated-blue'>
          {text}
        </p>
      </div>
      <div className='flex items-center gap-x-2'>
        <img className='w-4' src={statsIcon} alt='Icon stats' />
        <p
          className={
            statsColor === 'green'
              ? 'text-emerald-500 font-bold text-sm'
              : 'text-rose-500 font-bold text-sm'
          }
        >
          {statsText}
        </p>
      </div>
    </article>
  )
}

export default FollowersCard
