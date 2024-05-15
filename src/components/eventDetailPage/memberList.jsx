import { formatDate } from "../../service/dateFormat";
import "../homePage/eventList.css";

export const MembersList = ({ eventInfo }) => {
  const { members } = eventInfo;
  return (
    <ul className="event-list">
      {members.map(({ fullName, email, birthDate }, index) => {
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
  );
};
