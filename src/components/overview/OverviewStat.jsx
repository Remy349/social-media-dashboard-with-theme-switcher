import React from 'react'

const OverviewStat = ({
  socialIcon,
  statsIcon,
  statsNum,
  statsPerc,
  text,
  statsColor
}) => {
  return (
    <div className='stat rounded-lg shadow-md p-8 grid gap-y-8 dark:bg-dark-desaturated-blue'>
      <div className='flex items-center justify-between'>
        <p className='font-bold text-lg dark:text-desaturated-blue'>{text}</p>
        <img className='w-6' src={socialIcon} alt='Icon social' />
      </div>
      <div className='flex items-center justify-between'>
        <h3 className='font-bold text-4xl dark:text-white-color'>{statsNum}</h3>
        <div className='flex items-center gap-x-2'>
          <img className='w-4' src={statsIcon} alt='Icon stats' />
          <p
            className={
              statsColor === 'green'
                ? 'text-emerald-500 font-bold text-sm'
                : 'text-rose-500 font-bold text-sm'
            }
          >
            {statsPerc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default OverviewStat
