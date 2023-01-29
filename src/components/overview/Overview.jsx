import React from 'react'
import OverviewStat from './OverviewStat'
import { overview } from '../../data/overviewData'

const Overview = () => {
  return (
    <section>
      <h2 className='font-bold mb-8 text-3xl dark:text-white-color'>
        Overview - Today
      </h2>
      <div
        className='grid gap-y-6 sm:grid-cols-2 gap-x-6 lg:grid-cols-3
        xl:grid-cols-4'
      >
        {overview.map((overV) => (
          <OverviewStat
            key={overV.id}
            socialIcon={overV.socialIcon}
            statsIcon={overV.statsIcon}
            statsNum={overV.statsNum}
            statsPerc={overV.statsPerc}
            text={overV.text}
            statsColor={overV.statsColor}
          />
        ))}
      </div>
    </section>
  )
}

export default Overview
