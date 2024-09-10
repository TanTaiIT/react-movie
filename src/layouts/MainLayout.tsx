import { useState } from 'react'
import MenuDropdown from './../components/MenuDropdown'
import { INITIAL_MENU } from './../constant/MenuConstant'
import { useContext } from 'react'
import { ThemContext } from './../context/app.context'

const MainLayout = () => {
  const { toggleDarkMode } = useContext(ThemContext)
  const [menu, setMenu] = useState(INITIAL_MENU)
  const toggleMenu = (category: string, action: string): void => {
    const newMenu = menu.map((item) => {
      if (item.label === category) {
        return {
          ...item,
          isActive: action === 'show' ? true : false
        }
      }
      return item
    })

    setMenu(newMenu)
  }

  return (
    <div className='h-[80px] flex items-center justify-between relative'>
      <div className='flex gap-6 p-1'>
        <h3 className='text-lg font-bold '>Movie App</h3>
        <ul className='flex items-center justify-center gap-5'>
          {menu.map((item, index) => {
            return (
              <li
                key={index}
                className=' text-base cursor-pointer'
                onMouseEnter={() => toggleMenu(item.label, 'show')}
                onMouseLeave={() => toggleMenu(item.label, 'hide')}
              >
                {item.label}
                <span className='ml-2'>⇲</span>
                <MenuDropdown visible={item.isActive} subMenu={item.children} />
              </li>
            )
          })}
        </ul>
      </div>

      <div className='flex items-center gap-2'>
        <button className='bg-transparent text-lg' >
          🔍
        </button>

        <button className='bg-transparent text-lg' onClick={toggleDarkMode}>
          ☀️
        </button>
      </div>
    </div>
  )
}

export default MainLayout