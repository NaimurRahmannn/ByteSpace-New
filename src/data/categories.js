export const categoryRows = [
  [
    { id: 'featured', label: 'Featured', selected: true },
    { id: 'music', label: 'Music' },
    { id: 'drawing-painting', label: 'Drawing & Painting' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'animation', label: 'Animation' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'ui-ux-design', label: 'UI/UX Design' },
    { id: 'creative-marketing', label: 'Creative Marketing' },
  ],
  [
    { id: 'digital-illustration', label: 'Digital Illustration' },
    { id: 'film-video', label: 'Film & Video' },
    { id: 'crafts', label: 'Crafts' },
    {
      id: 'freelance-entrepreneurship',
      label: 'Freelance & Entrepreneurship',
    },
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'photography', label: 'Photography' },
  ],
  [
    { id: 'productivity', label: 'Productivity' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'cooking', label: 'Cooking' },
    { id: 'more', label: '+ More', more: true },
  ],
]

export const categories = categoryRows.flat()
