import { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useRef } from "react";

const image_base_url = "https://image.tmdb.org/t/p/original"
function Slider() {

  const [movieLists, setMovieLists] = useState([])
  const elementRef = useRef() 
  const currentWidth = window.innerWidth

  const getMoviesTrending = () => {
    GlobalApi.getTrendingVideos
    .then((response) => {
        setMovieLists(response.data.results)
    })
    
  }

  const sliderLeft = (element) => {
    element.scrollLeft -=  currentWidth - 100
  }

  const sliderRight = (element) => element.scrollLeft += currentWidth - 100


  useEffect(() => {
    getMoviesTrending()

  },[])

  return (
    <div>
      <HiChevronLeft className="text-white text-3xl absolute mx-8 mt-40 hidden md:block cursor-pointer" onClick={() => sliderLeft(elementRef.current)}/>
      <HiChevronRight  className="text-white text-3xl absolute mx-8 mt-40 right-0 hidden md:block cursor-pointer" onClick={() => sliderRight(elementRef.current)}/>
      <div className="flex overflow-x-auto px-16 py-5 w-full scrollbar-none scroll-smooth transition-all duration-300"  ref={elementRef}>
        {
          movieLists.map((movie, index) => (
            <img src={image_base_url+movie.backdrop_path} key={index} className="min-w-full md:h-[350px] object-cover mr-7 bg-no-repeat object-left-top hover:border-2 border-gray-100 hover:cursor-move transition-all duration-300 ease-in-out"/>
          ))
        }
      </div>
    </div>

  );
}

export default Slider;
