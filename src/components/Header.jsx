import logo from '../assets/images/logo.png'
import 
{ 
  HiHome,HiMagnifyingGlass, HiStar,
  HiPlayCircle, HiTv
} 
from 'react-icons/hi2'
import {HiPlus} from 'react-icons/hi'
import HeaderItem from './HeaderItem'
import profile from '../assets/images/avatar.png'
import { HiDotsVertical } from 'react-icons/hi'
import { useState } from 'react'

function Header() {
  const [toggle, setToggle] = useState(false)

  const menu = [
    {
      name:'HOME',
      icon: HiHome
    },
    {
      name:'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name:'WATCH LIST',
      icon: HiPlus
    },
    {
      name:'ORIGINALS',
      icon: HiStar
    },
    {
      name:'MOVIES',
      icon: HiPlayCircle
    },
    {
      name:'SERIES ',
      icon: HiTv
    },
    
  ]
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex items-center gap-10'>
        <img src={logo} alt='logo' className='w-[80px] md:w-[115px] object-cover'/>
        <div className='hidden md:flex gap-8'>
          {
            menu.map((item, index) => <HeaderItem key={index} name={item.name} Icon={item.icon}/>)
          }
        </div>
        <div className='md:hidden flex gap-5'>
          {
            menu.map((item, index) => index <  3 && <HeaderItem key={index} name={''} Icon={item.icon}/>)
          }
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem Icon={HiDotsVertical} name={''} />
            {
              toggle &&
              <div className=' absolute flex flex-col gap-3 ml-2 mt-5 bg-[#121212] border border-gray-500 px-3 py-4' >
                {
                  menu.map((item, index) => index >=  3 && <HeaderItem key={index} name={item.name} Icon={item.icon}/>)
                }
              </div>
            }
          </div>
        </div>
        
        
      </div>
      <img src={profile} alt='profile' className='w-[40px] rounded-full cursor-pointer shadow-md' />
    </div>
  )
}

export default Header;
