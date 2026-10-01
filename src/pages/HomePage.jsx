import Header from '../components/layout/Header.jsx'
import CourseDiscoverySection from '../components/sections/CourseDiscoverySection.jsx'
import GrowthCreatorSection from '../components/sections/GrowthCreatorSection.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import LearningPathsSection from '../components/sections/LearningPathsSection.jsx'
import PartnerSection from '../components/sections/PartnerSection.jsx'

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <PartnerSection />
        <CourseDiscoverySection />
        <LearningPathsSection />
        <GrowthCreatorSection />
      </main>
    </>
  )
}
