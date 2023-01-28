import React from 'react'
import FollowersCard from './FollowersCard'
import { facebookIcon, upIcon } from '../../images/icons'

const Followers = () => {
  return (
    <section>
      <FollowersCard
        username='@nathanf'
        statsNum='1987'
        text='Followers'
        statsText='12 Today'
        socialIcon={facebookIcon}
        statsIcon={upIcon}
        statsColor='green'
      />
    </section>
  )
}

export default Followers
