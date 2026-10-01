import sarahAvatar from '../assets/figma/course-discovery-asset-03.png'
import jamesAvatar from '../assets/figma/testimonials-asset-01.png'
import alexAvatar from '../assets/figma/testimonials-asset-02.png'

export const testimonialsContent = {
  heading: 'Discover What Our Community Is Saying',
  description:
    'At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.',
  testimonials: [
    {
      id: 'sarah-m',
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      avatar: sarahAvatar,
      quote:
        '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
      id: 'james-l',
      name: 'James L.',
      role: 'Lifelong Learner',
      avatar: jamesAvatar,
      quote:
        '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
      id: 'alex-b',
      name: 'Alex B.',
      role: 'Inspired Creator',
      avatar: alexAvatar,
      quote:
        '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
  ],
}
