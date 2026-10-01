import avatarOne from '../assets/figma/hero-asset-02.png'
import avatarTwo from '../assets/figma/hero-asset-03.png'
import avatarThree from '../assets/figma/hero-asset-04.png'
import avatarFour from '../assets/figma/hero-asset-05.png'
import avatarFive from '../assets/figma/hero-asset-06.png'
import avatarSix from '../assets/figma/hero-asset-07.png'
import avatarSeven from '../assets/figma/hero-asset-08.png'

import ornamentRing from '../assets/figma/hero-asset-13.png'
import ornamentWave from '../assets/figma/hero-asset-14.png'
import ornamentConeLeft from '../assets/figma/hero-asset-15.png'
import ornamentConeRight from '../assets/figma/hero-asset-16.png'
import ornamentConeSmall from '../assets/figma/hero-asset-17.png'
import heroPerson from '../assets/figma/hero-asset-01.png'

export const heroContent = {
  heading: 'Get Access to Hundreds Courses Available',
  description:
    'Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.',
  searchPlaceholder: 'Course, topic, creator',
  searchButtonLabel: 'Search',
}

export const heroAssets = {
  person: heroPerson,
  avatars: [
    avatarOne,
    avatarTwo,
    avatarThree,
    avatarFour,
    avatarFive,
    avatarSix,
    avatarSeven,
  ],
  ornaments: {
    ring: ornamentRing,
    wave: ornamentWave,
    coneLeft: ornamentConeLeft,
    coneRight: ornamentConeRight,
    coneSmall: ornamentConeSmall,
  },
}

export const heroStats = {
  progress: {
    label: 'Learning Progress',
    value: '55%',
    percent: 56,
  },
  students: {
    title: 'Happy Students',
    rating: '4.5 (240)',
    totalLabel: '2K+',
  },
  courseSummary: {
    title: 'UI/UX Design',
    details: ['200 Courses', '1000+ Students'],
  },
}
