import React from 'react'

const FollowersCard = ({
  username,
  statsNum,
  text,
  statsText,
  socialIcon,
  statsIcon,
  statsColor
}) => {
  return (
    <article className='card card-one shadow-md rounded-lg flex flex-col gap-y-7 items-center py-8'>
      <div className='flex items-center gap-x-2'>
        <img className='w-6' src={socialIcon} alt='Icon facebook' />
        <p className='font-bold text-sm'>{username}</p>
      </div>
      <div>
        <h3 className='text-6xl mb-2 font-bold'>{statsNum}</h3>
        <p className='card-text text-sm uppercase'>{text}</p>
      </div>
      <div className='flex items-center gap-x-2'>
        <img className='w-4' src={statsIcon} alt='Icon up' />
        <p
          className={
            statsColor === 'green'
              ? 'text-emerald-500 font-bold text-sm'
              : 'text-red-500 font-bold text-sm'
          }
        >
          {statsText}
        </p>
      </div>
    </article>
  )
}

export default FollowersCard
