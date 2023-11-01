import LoginImage from "../Shared/LoginImage";
import google from "../../assets/images/login/google.png";
import facebook from "../../assets/images/login/facebook.png";
import linkedin from "../../assets/images/login/linkedin.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen flex">
      <div className="w-1/2">
        <LoginImage></LoginImage>
      </div>
      <div className="rounded-md w-1/3 border-2 border-[#D0D0D0]">
        <h2 className="text-4xl font-bold mt-12 text-center">Login</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
              placeholder="Your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-custom-color text-white">Login</button>
          </div>
        </form>
        <p className="text-center font-medium">or Sign In With</p>
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
          Have an account?
          <span className="text-custom-color ml-2">
            <Link>Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
