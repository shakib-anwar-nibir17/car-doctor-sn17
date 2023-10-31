import slider1 from "../../../assets/images/banner/1.jpg";
import slider2 from "../../../assets/images/banner/2.jpg";
import slider3 from "../../../assets/images/banner/3.jpg";
import slider4 from "../../../assets/images/banner/4.jpg";
// import slider5 from "../../../assets/images/banner/5.jpg";
// import slider6 from "../../../assets/images/banner/6.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full h-full" />
        <div className="absolute"></div>
        <div className="absolute flex justify-end  md:bottom-0 md:right-0 space-x-5 md:mb-10 md:mr-10">
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent text-white hover:bg-custom-color text-2xl"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent text-white hover:bg-custom-color md:text-2xl"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slider4} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
