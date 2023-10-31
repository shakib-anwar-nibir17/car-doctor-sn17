import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="mt-28 mb-32">
      <div className="flex">
        <div className="relative w-1/3">
          <img className="w-[560px] h-[450px]" src={person} alt="" />
          <img
            className="absolute top-1/2 w-80 h-80 -right-20 border-8 border-white rounded-lg"
            src={parts}
            alt=""
          />
        </div>
        <div className="w-2/3 ml-32 space-y-8">
          <h4 className="text-xl font-bold text-custom-color">About Us</h4>
          <h1 className="text-5xl font-bold w-1/2">
            We are qualified & of experience in this field
          </h1>
          <p className="text-xl font-medium text-[#737373] text-justify w-2/3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <p className="text-xl font-medium text-[#737373] text-justify w-2/3">
            the majority have suffered alteration in some form, by injected
            humour, or words which dont look even slightly believable.
          </p>
          <button className="p-4 text-white font-bold bg-custom-color">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
