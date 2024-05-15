import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEventID } from "../service/events-serviceAPI";

export const useFetchEventID = () => {
  const [eventInfo, setEventInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const fetchDataEvent = async () => {
      try {
        setIsLoading(true);

        const fetchedEvent = await getEventID(id, controller);
        setEventInfo(fetchedEvent);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        controller.abort();
      }
    };
    fetchDataEvent();
  }, [id]);

  return { eventInfo, isLoading, error };
};
