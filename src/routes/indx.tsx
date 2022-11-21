import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import Vehicle from '../pages/Vehicle'

export default function Routes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'vehicle/:id', element: <Vehicle /> },
  ])
  return routes
}
