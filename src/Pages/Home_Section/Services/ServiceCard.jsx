import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="rounded-lg border-2 border-[#E8E8E8]">
        <figure>
          <img className=" w-full px-8 mt-8 mx-auto" src={img} alt={title} />
        </figure>
        <div className="ml-8">
          <h2 className="text-3xl text-[#444] font-bold mt-4">{title}</h2>
          <div className="text-2xl text-custom-color flex items-center mt-6 mb-8 font-bold">
            <p>Price:${price}</p>
            <Link to={`/book_service/${_id}`}>
              <button className="ml-44 lg:ml-52">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
