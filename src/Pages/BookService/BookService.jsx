import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BookService = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, price, _id, img } = service;

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name1 = form.name1.value;
    const name2 = form.name2.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    const booking = {
      name1,
      name2,
      phone,
      email,
      price,
      message,
      service: title,
      service_id: _id,
      img: img,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="hero min-h-screen bg-base-200">
        <div className=" w-3/4 shadow-2xl bg-base-100">
          <form onSubmit={handleBookService} className="card-body">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="name1"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="name2"
                  placeholder="Last Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={"$" + price}
                  placeholder="Service Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <textarea
                type="password"
                name="message"
                placeholder="Your Message"
                className="input input-bordered h-44 pt-4"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-custom-color text-white font-bold">
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookService;
