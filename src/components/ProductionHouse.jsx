import disney from '../assets/images/disney.png'
import marvel from '../assets/images/marvel.png'
import nationalG from '../assets/images/nationalG.png'
import pixar from '../assets/images/pixar.png'
import starwar from '../assets/images/starwar.png'
import disneyV from '../assets/videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import nationalGV from '../assets/videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import starwarV from '../assets/videos/star-wars.mp4'


function ProductionHouse() {
  const listProductionHouse = [
    {
      id : 1,
      image : disney,
      video: disneyV
    },
    {
      id :2 ,
      image : marvel,
      video: marvelV
    },
    {
      id :3 ,
      image : nationalG,
      video: nationalGV
    },
    {
      id : 4,
      image : pixar,
      video: pixarV
    },
    {
      id :5 ,
      image : starwar,
      video: starwarV
    }
  ]

  return (
    <div>
      <div className='flex px-16 py-5 gap-5'>
        {
          listProductionHouse.map((item) => (
            <div key={item.id} className='relative hover:border-2 border-b-100 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl bg-gray-800 shadow-black'>
              <video src={item.video} autoPlay loop playsInline  className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 hover:z-10'/>
              <img src={item.image} alt='group-prod' className='w-full z-1 '/>
            </div>
            

          ))
        }
      </div>
      
    </div>
  );
}

export default ProductionHouse;
