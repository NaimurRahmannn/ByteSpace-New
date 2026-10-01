import courseAvatarOne from '../assets/figma/hero-asset-03.png'
import courseAvatarTwo from '../assets/figma/course-discovery-asset-02.png'
import courseAvatarThree from '../assets/figma/course-discovery-asset-03.png'
import courseAvatarFour from '../assets/figma/course-discovery-asset-04.png'

import courseImageOne from '../assets/figma/course-discovery-asset-01.jpg'
import courseImageTwo from '../assets/figma/course-discovery-asset-05.jpg'
import courseImageThree from '../assets/figma/course-discovery-asset-06.jpg'
import courseImageFour from '../assets/figma/course-discovery-asset-07.jpg'
import courseImageFive from '../assets/figma/course-discovery-asset-08.jpg'
import courseImageSix from '../assets/figma/course-discovery-asset-09.jpg'

const courseAvatars = [
  courseAvatarOne,
  courseAvatarTwo,
  courseAvatarThree,
  courseAvatarFour,
]

const sharedCourseMetadata = {
  creator: 'by purepearl studio',
  level: 'Beginner',
  lessonCount: '17 Lessons',
  duration: '2 hours 16 mins',
  comments: '59 Comments',
  price: '$25',
  priceSuffix: '/lifetime',
  rating: '4.5',
  students: '26+',
  avatars: courseAvatars,
}

export const courses = [
  {
    id: 'learn-figma-from-basic',
    title: 'Learn Figma from Basic',
    image: courseImageOne,
    imageAlt: 'Learn Figma from Basic course thumbnail',
    ...sharedCourseMetadata,
  },
  {
    id: 'build-digital-asset',
    title: 'Build Digital Asset',
    image: courseImageTwo,
    imageAlt: 'Build Digital Asset course thumbnail',
    ...sharedCourseMetadata,
  },
  {
    id: 'power-of-big-data',
    title: 'the Power of Big Data',
    image: courseImageThree,
    imageAlt: 'the Power of Big Data course thumbnail',
    ...sharedCourseMetadata,
  },
  {
    id: 'balancing-productivity-and-self-care',
    title: 'Balancing Productivity and Self-Care',
    image: courseImageFour,
    imageAlt: 'Balancing Productivity and Self-Care course thumbnail',
    ...sharedCourseMetadata,
  },
  {
    id: 'mastering-money-management',
    title: 'Mastering Money Management',
    image: courseImageFive,
    imageAlt: 'Mastering Money Management course thumbnail',
    ...sharedCourseMetadata,
  },
  {
    id: 'idea-to-startup-success',
    title: 'From Idea to Startup Success',
    image: courseImageSix,
    imageAlt: 'From Idea to Startup Success course thumbnail',
    ...sharedCourseMetadata,
  },
]
