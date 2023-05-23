import { lazy } from 'react'

export const Home = lazy(() =>
  import('../pages/Home/index').then(module => ({
    default: module.Home,
  })),
)

export const Loading = lazy(() =>
  import('../components/Loading').then(module => ({
    default: module.Loading,
  })),
)

// export const GenericNotFound = lazy(() =>
//   import('').then(module => ({
//     default: module.GenericNotFound,
//   })),
// )
