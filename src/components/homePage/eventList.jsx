import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./eventList.css";
import { formatDate } from "../../service/dateFormat";

export const EventsList = ({ events }) => {
  const location = useLocation();
  const [sortBy, setSortBy] = useState(null);

  const handleSort = (key) => {
    if (sortBy === key) {
      events.reverse();
    } else {
      switch (key) {
        case "title":
          events.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "eventDate":
          events.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
          break;
        case "organizer":
          events.sort((a, b) => a.organizer.localeCompare(b.organizer));
          break;
        default:
          break;
      }
      setSortBy(key);
    }
  };

  const formattedDateString = (eventDate) => {
    return formatDate(eventDate);
  };

  return (
    <>
      <div>
        <label htmlFor="sortSelect">Sort by: </label>
        <select
          id="sortSelect"
          onChange={(e) => handleSort(e.target.value)}
          className="sort-select"
        >
          <option value="">Select Option</option>
          <option value="title">Title</option>
          <option value="eventDate">Date</option>
          <option value="organizer">Organizer</option>
        </select>
      </div>
      <ul className="event-list">
        {events.map(({ title, _id, description, eventDate, organizer }) => (
          <li key={_id} className="event-card">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <p>Date: {formattedDateString(eventDate)}</p>
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
        ))}
      </ul>
    </>
  );
};
