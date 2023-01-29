import {
  downIcon,
  facebookIcon,
  instagramIcon,
  twitterIcon,
  upIcon,
  youtubeIcon
} from '../images/icons.js'

export const followers = [
  {
    id: 1,
    socialName: 'facebook',
    username: '@nathanf',
    statsNum: '1987',
    text: 'Followers',
    statsText: '12 Today',
    socialIcon: facebookIcon,
    statsIcon: upIcon,
    statsColor: 'green'
  },
  {
    id: 2,
    socialName: 'twitter',
    username: '@nathanf',
    statsNum: '1044',
    text: 'Followers',
    statsText: '99 Today',
    socialIcon: twitterIcon,
    statsIcon: upIcon,
    statsColor: 'green'
  },
  {
    id: 3,
    socialName: 'instagram',
    username: '@realnathanf',
    statsNum: '11k',
    text: 'Followers',
    statsText: '1099 Today',
    socialIcon: instagramIcon,
    statsIcon: upIcon,
    statsColor: 'green'
  },
  {
    id: 4,
    socialName: 'youtube',
    username: 'Nathan F.',
    statsNum: '8239',
    text: 'Subscribers',
    statsText: '144 Today',
    socialIcon: youtubeIcon,
    statsIcon: downIcon,
    statsColor: 'red'
  }
]
