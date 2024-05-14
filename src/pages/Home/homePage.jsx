import { useFetchEvents } from "../../hooks/useFetchEvents";
import { Loader } from "../../components/Loader/loader";
import { EventsList } from "../../components/homePage/eventList";
import "./home.css";
const Home = () => {
  const { eventsTrends, isLoading, error } = useFetchEvents();
  return (
    <section>
      <h1 className="title">Trending events today</h1>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {eventsTrends.length && <EventsList events={eventsTrends} />}
    </section>
  );
};

export default Home;
