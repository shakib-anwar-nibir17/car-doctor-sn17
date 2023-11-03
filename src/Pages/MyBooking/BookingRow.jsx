import PropTypes from "prop-types";

const BookingRow = ({ booking }) => {
  const { img, name1, name2, service, phone, service_id } = booking;
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="w-24 rounded h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
            <div>
              <div className="font-bold">{name1 + name2}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>{service}</td>
        <td>{service_id}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
  );
};

BookingRow.propTypes = {
  booking: PropTypes.object,
};

export default BookingRow;
