import React, { useState } from "react";
import { formatDate } from "../../service/dateFormat";
import "../homePage/eventList.css";

export const MembersList = ({ eventInfo }) => {
  const { members } = eventInfo;
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMembers = members.filter((member) => {
    return (
      member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by full name or email"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="event-list">
        {filteredMembers.map(({ fullName, email, birthDate }, index) => {
          const formattedDateString = formatDate(birthDate);

          return (
            <li key={index} className="event-card">
              <h2 className="card-title">{fullName}</h2>
              <p className="card-description">{email}</p>
              <p>Birthday: {formattedDateString}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
