import React from 'react'
import FollowersCard from './FollowersCard'
import { followers } from '../../data/followersData'

const Followers = () => {
  return (
    <section
      className='grid gap-y-7 sm:grid-cols-2 sm:gap-x-7
      lg:grid-cols-3 xl:grid-cols-4'
    >
      {followers.map((follower) => (
        <FollowersCard
          key={follower.id}
          socialName={follower.socialName}
          username={follower.username}
          statsNum={follower.statsNum}
          text={follower.text}
          statsText={follower.statsText}
          socialIcon={follower.socialIcon}
          statsIcon={follower.statsIcon}
          statsColor={follower.statsColor}
        />
      ))}
    </section>
  )
}

export default Followers
