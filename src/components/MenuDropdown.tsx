interface SubMenuType {
  label: string,
  to: string
}
interface MenuDropdownProps {
  visible: boolean,
  subMenu: SubMenuType[]
}
const MenuDropdown = (props: MenuDropdownProps) => {
  const { visible, subMenu } = props
  return (
    <div className={`absolute border-2 transition-all ease-in bg-black rounded-lg p-2 w-[150px] ${visible ? 'block' : 'hidden'}`}>
      <ul>
        {
          subMenu && subMenu.map((item, index) => {
            return (
              <li className='p-2' key={index}>{item.label}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default MenuDropdown