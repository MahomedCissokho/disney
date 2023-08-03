import logo from '../assets/images/logo.png'
import 
{ 
  HiHome,HiMagnifyingGlass, HiStar,
  HiPlayCircle, HiTv
} 
from 'react-icons/hi2'
import {HiPlus} from 'react-icons/hi'
import HeaderItem from './HeaderItem'
import profile from '../assets/images/hacker.png'

function Header() {
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
      <div className='flex items-center justify-center gap-10'>
        <img src={logo} alt='logo' className='w-[80px] md:w-[115px] object-cover'/>
        {
          menu.map(item => <HeaderItem key={item.id} name={item.name} Icon={item.icon}/>)
        }
      </div>
      <img src={profile} alt='profile' className='w-[40px] rounded-full cursor-pointer shadow-md' />
    </div>
  )
}

export default Header;
