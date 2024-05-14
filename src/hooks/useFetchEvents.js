import { useState, useEffect } from "react";
import { getEvents } from "../service/events-serviceAPI";

export const useFetchEvents = () => {
  const [eventsTrends, setEventsTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const fetchedEvents = await getEvents(controller);
        setEventsTrends(fetchedEvents);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchData();

    // return () => {
    //     controller.abort();
    // };
  }, []);

  return { eventsTrends, isLoading, error };
};
