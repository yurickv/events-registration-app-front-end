import { NavLink, useLocation } from "react-router-dom";
import "./eventList.css";
import { formatDate } from "../../service/dateFormat";

export const EventsList = ({ events }) => {
  const location = useLocation();
  return (
    <ul className="event-list">
      {events.map(({ title, _id, description, eventDate, organizer }) => {
        const formattedDateString = formatDate(eventDate);

        return (
          <li key={_id} className="event-card">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <p>Date: {formattedDateString}</p>
            <p>Organizer: {organizer}</p>
            <div className="card-button">
              <NavLink to={`add-member/${_id}`} state={{ from: location }}>
                Register
              </NavLink>
              <NavLink to={`event-detail/${_id}`} state={{ from: location }}>
                View
              </NavLink>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
