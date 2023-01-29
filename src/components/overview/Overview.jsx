import React from 'react'
import OverviewStat from './OverviewStat'

const Overview = () => {
  return (
    <section>
      <h2 className='font-bold mb-8 text-3xl'>Overview - Today</h2>
      <div>
        <OverviewStat />
      </div>
    </section>
  )
}

export default Overview
