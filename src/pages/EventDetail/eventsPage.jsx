import { Loader } from "../../components/Loader/loader";
import { useFetchEventID } from "../../hooks/useFetchEventID";

const EventDetail = () => {
  const { eventInfo, isLoading, error } = useFetchEventID();
  return (
    <section>
      <h1>Events Members</h1>
      {eventInfo.title && <h2>{eventInfo.title}</h2>}
      {eventInfo.description && <p>{eventInfo.description}</p>}
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {/* {eventInfo.length && <membersList eventInfo={eventInfo} />} */}
    </section>
  );
};

export default EventDetail;
