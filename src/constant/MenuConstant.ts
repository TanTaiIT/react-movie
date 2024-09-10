export const INITIAL_MENU = [
  {
    label: 'Movie',
    isActive: false,
    to: '/move',
    children: [
      {
        label: 'popular',
        to: '/popular'
      },
      {
        label: 'top rated',
        to: '/top-rated'
      },
      {
        label: 'upcoming',
        to: '/upcoming'
      },
      {
        label: 'Most Viewed',
        to: '/most-viewed'
      }
    ]
  },
  {
    label: 'Tv Show',
    isActive: false,
    to: '/tv',
    children: [
      {
        label: 'popular',
        to: '/popular'
      },
      {
        label: 'on tv',
        to: '/top-rated'
      },
      {
        label: 'the takl show',
        to: '/on-the-air'
      }
    ]
  }
]