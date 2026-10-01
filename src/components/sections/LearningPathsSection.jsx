import { learningPaths } from '../../data/learningPaths.js'
import LearningPathCard from '../ui/LearningPathCard.jsx'

export default function LearningPathsSection() {
  return (
    <section
      aria-labelledby="learning-paths-heading"
      className="bg-white pt-4 pb-16 sm:pt-6 sm:pb-20 xl:pt-0 xl:pb-[120px]"
      id="learning-paths"
    >
      <div className="mx-auto max-w-content px-5 xl:px-0">
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2
            className="max-w-[792px] font-heading text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#03081a] sm:text-[32px] xl:text-[36px]"
            id="learning-paths-heading"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="max-w-[917px] font-body text-body-lg text-text-secondary">
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring there's
            something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </p>
        </div>

        <ul
          aria-label="Learning paths"
          className="mx-auto mt-10 grid grid-cols-2 justify-items-center gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6 xl:mt-[68px] xl:w-[1202px] xl:max-w-none xl:grid-cols-6 xl:gap-10"
        >
          {learningPaths.map((path) => (
            <LearningPathCard key={path.id} {...path} />
          ))}
        </ul>
      </div>
    </section>
  )
}
