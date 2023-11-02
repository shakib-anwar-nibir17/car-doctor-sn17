import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const url = `http://localhost:5000/bookings?email=${email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [url]);
  return <div></div>;
};

export default MyBooking;
