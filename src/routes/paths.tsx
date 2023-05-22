import { lazy } from 'react'

export const Home = lazy(() =>
  import('../pages/Home/index').then(module => ({
    default: module.Home,
  })),
)

// export const GenericNotFound = lazy(() =>
//   import('').then(module => ({
//     default: module.GenericNotFound,
//   })),
// )
