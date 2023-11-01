import { Link } from "react-router-dom";
import LoginImage from "../Shared/LoginImage";
import google from "../../assets/images/login/google.png";
import facebook from "../../assets/images/login/facebook.png";
import linkedin from "../../assets/images/login/linkedin.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, password, email);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen flex mb-10">
      <div className="w-1/2">
        <LoginImage></LoginImage>
      </div>
      <div className="rounded-md w-1/3 border-2 border-[#D0D0D0]">
        <h2 className="text-4xl font-bold mt-12 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-custom-color text-white">Sign Up</button>
          </div>
        </form>
        <p className="text-center font-medium">or Sign Up With</p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-[#F5F5F8] p-4 rounded-full">
            <img className="w-[25px] h-[25px]" src={google} alt="" />
          </button>
          <button className="bg-[#F5F5F8] p-4 rounded-full">
            <img className="w-[25px] h-[25px]" src={facebook} alt="" />
          </button>
          <button className="bg-[#F5F5F8] p-4 rounded-full">
            <img className="w-[25px] h-[25px]" src={linkedin} alt="" />
          </button>
        </div>
        <p className="text-center font-medium mt-8 mb-10">
          Already have an account?
          <span className="text-custom-color ml-2">
            <Link to="/login">Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
