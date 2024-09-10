import { useRoutes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
export const useRouteElement = () => {
  const routerElement = useRoutes([
    {
      path: '',
      element: <MainLayout />
    }
  ])

  return routerElement
}
