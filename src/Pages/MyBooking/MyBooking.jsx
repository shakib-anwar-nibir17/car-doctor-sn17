import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [myBooking, setMyBooking] = useState([]);
  const email = user.email;
  const url = `http://localhost:5000/bookings?email=${email}`;
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => setMyBooking(res.data));
  }, [url]);
  return (
    <div>
      <h2 className="text-6xl">Bookings</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Service</th>
                <th>Service ID</th>
                <th></th>
              </tr>
            </thead>
            {myBooking.map((booking) => (
              <BookingRow key={booking._id} booking={booking}></BookingRow>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
