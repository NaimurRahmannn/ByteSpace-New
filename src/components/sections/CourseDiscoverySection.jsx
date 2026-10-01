import { categoryRows } from '../../data/categories.js'
import { courses } from '../../data/courses.js'
import CategoryPill from '../ui/CategoryPill.jsx'
import CourseCard from '../ui/CourseCard.jsx'

function CategoryRow({ categories, row }) {
  return (
    <div
      className="flex items-center justify-center gap-4"
      data-category-row={row}
    >
      {categories.map((category) => (
        <CategoryPill key={category.id} {...category} />
      ))}
    </div>
  )
}

export default function CourseDiscoverySection() {
  return (
    <section
      aria-labelledby="course-discovery-heading"
      className="bg-white pb-16 pt-12 xl:pb-[72px] xl:pt-[72px]"
      id="courses"
    >
      <div className="mx-auto max-w-content px-5 xl:px-0">
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2
            className="max-w-[588px] font-heading text-heading-lg text-[#03081a]"
            id="course-discovery-heading"
          >
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="max-w-[917px] font-body text-body-lg text-text-secondary">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div
          className="mt-8 hidden flex-col items-center gap-[21px] xl:mt-[42px] xl:flex"
          data-category-layout="desktop-rows"
        >
          {categoryRows.map((row, index) => (
            <CategoryRow
              categories={row}
              key={index}
              row={index + 1}
            />
          ))}
        </div>

        <div
          className="mt-8 flex flex-wrap justify-center gap-4 xl:hidden"
          data-category-layout="responsive-wrap"
        >
          {categoryRows.flat().map((category) => (
            <CategoryPill key={category.id} {...category} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:mt-[77px] xl:grid-cols-3 xl:gap-x-10 xl:gap-y-10">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  )
}
