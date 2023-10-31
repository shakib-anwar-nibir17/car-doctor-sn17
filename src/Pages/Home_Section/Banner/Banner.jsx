import slider1 from "../../../assets/images/banner/1.png";
import slider2 from "../../../assets/images/banner/2.png";
import slider3 from "../../../assets/images/banner/3.png";
import slider4 from "../../../assets/images/banner/4.png";
// import slider5 from "../../../assets/images/banner/5.png";
// import slider6 from "../../../assets/images/banner/6.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full h-full" />
        <div className="absolute w-1/2 bg-gradient-to-r from-[#151515] to-[#00000000] h-full text-white flex flex-col justify-center space-y-4">
          <h2 className="text-6xl font-bold ml-5">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-xl font-medium ml-5">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4 ml-5">
            <button className="bg-custom-color p-4 border-2 border-custom-color font-bold rounded-lg hover:bg-transparent hover:border-white hover:border-2">
              Discover More
            </button>
            <button className="bg-transparent font-bold border-white border-2 p-4 rounded-lg hover:bg-custom-color hover:border-custom-color">
              Latest Projects
            </button>
          </div>
        </div>
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
        <img src={slider2} className="w-full h-full" />
        <div className="absolute w-1/2 bg-gradient-to-r from-[#151515] to-[#00000000] h-full text-white flex flex-col justify-center space-y-4">
          <h2 className="text-6xl font-bold ml-5">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-xl font-medium ml-5">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4 ml-5">
            <button className="bg-custom-color p-4 border-2 border-custom-color font-bold rounded-lg hover:bg-transparent hover:border-white hover:border-2">
              Discover More
            </button>
            <button className="bg-transparent font-bold border-white border-2 p-4 rounded-lg hover:bg-custom-color hover:border-custom-color">
              Latest Projects
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end  md:bottom-0 md:right-0 space-x-5 md:mb-10 md:mr-10">
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent text-white hover:bg-custom-color text-2xl"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent text-white hover:bg-custom-color md:text-2xl"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full h-full" />
        <div className="absolute w-1/2 bg-gradient-to-r from-[#151515] to-[#00000000] h-full text-white flex flex-col justify-center space-y-4">
          <h2 className="text-6xl font-bold ml-5">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-xl font-medium ml-5">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4 ml-5">
            <button className="bg-custom-color p-4 border-2 border-custom-color font-bold rounded-lg hover:bg-transparent hover:border-white hover:border-2">
              Discover More
            </button>
            <button className="bg-transparent font-bold border-white border-2 p-4 rounded-lg hover:bg-custom-color hover:border-custom-color">
              Latest Projects
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end  md:bottom-0 md:right-0 space-x-5 md:mb-10 md:mr-10">
          <a
            href="#slide2"
            className="btn btn-circle bg-transparent text-white hover:bg-custom-color text-2xl"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-transparent text-white hover:bg-custom-color md:text-2xl"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slider4} className="w-full h-full" />
        <div className="absolute w-1/2 bg-gradient-to-r from-[#151515] to-[#00000000] h-full text-white flex flex-col justify-center space-y-4">
          <h2 className="text-6xl font-bold ml-5">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-xl font-medium ml-5">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4 ml-5">
            <button className="bg-custom-color p-4 border-2 border-custom-color font-bold rounded-lg hover:bg-transparent hover:border-white hover:border-2">
              Discover More
            </button>
            <button className="bg-transparent font-bold border-white border-2 p-4 rounded-lg hover:bg-custom-color hover:border-custom-color">
              Latest Projects
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end  md:bottom-0 md:right-0 space-x-5 md:mb-10 md:mr-10">
          <a
            href="#slide3"
            className="btn btn-circle bg-transparent text-white hover:bg-custom-color text-2xl"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-transparent text-white hover:bg-custom-color md:text-2xl"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
