import { useRouteElement } from './routes/useRouteElement'
import { useContext } from 'react'
import { ThemContext } from './context/app.context'
function App() {
  const { darkMode } = useContext(ThemContext)
  const routerElement = useRouteElement()
  return (
    <div className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'}`}>
      <div className='mx-auto max-w-[1440px]'>
        {routerElement}
      </div>
    </div>
  )
}

export default App
