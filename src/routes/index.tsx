import { Suspense } from 'react'
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from 'react-router-dom'
import { Home } from './paths'

export const Routes = () => {
  return (
    <Suspense fallback={<>Carregando..</>}>
      <RoutesReactRouterDom>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/404" />} />
        
      </RoutesReactRouterDom>
    </Suspense>
  )
}

//<Route path="/404" element={<GenericNotFound />} />