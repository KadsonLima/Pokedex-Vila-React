import { Suspense } from 'react'
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from 'react-router-dom'
import { Home } from './paths'
import { Loading } from '../components/Loading'

export const Routes = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <RoutesReactRouterDom>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/404" />} />
        
      </RoutesReactRouterDom>
    </Suspense>
  )
}

//<Route path="/404" element={<GenericNotFound />} />