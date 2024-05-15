import { Loader } from "../../components/Loader/loader";
import { useFetchEventID } from "../../hooks/useFetchEventID";
import { Link } from "react-router-dom";
import "./eventPage.css";
import "../Home/home.css";
import { MembersList } from "../../components/eventDetailPage/memberList";

const EventDetail = () => {
  const { eventInfo, isLoading, error } = useFetchEventID();

  return (
    <section className="evens-detail-section">
      <h1 className="title">Events details and members</h1>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {eventInfo.title && (
        <div className="evens-detail-div">
          <h2>{eventInfo.title}</h2>{" "}
          <Link to={`/add-member/${eventInfo._id}`}>Register</Link>
        </div>
      )}
      {eventInfo.description && <p>{eventInfo.description}</p>}
      {eventInfo.members && <MembersList eventInfo={eventInfo} />}
    </section>
  );
};

export default EventDetail;
