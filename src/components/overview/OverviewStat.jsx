import React from 'react'
import { facebookIcon, upIcon } from '../../images/icons'

const OverviewStat = () => {
  return (
    <div className='stat rounded-lg shadow-md p-8 grid gap-y-8'>
      <div className='flex items-center justify-between'>
        <p className='font-bold text-lg'>Page Views</p>
        <img className='w-6' src={facebookIcon} alt='Icon social' />
      </div>
      <div className='flex items-center justify-between'>
        <h3 className='font-bold text-4xl'>87</h3>
        <div className='flex items-center gap-x-2'>
          <img className='w-4' src={upIcon} alt='Icon stats' />
          <p className='text-emerald-500 font-bold text-sm'>3%</p>
        </div>
      </div>
    </div>
  )
}

export default OverviewStat
