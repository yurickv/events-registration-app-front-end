import axios from "axios";

axios.defaults.baseURL =
  "https://events-registration-app-back-end.onrender.com";

export const getEvents = async (controller) => {
  try {
    const { data } = await axios.get(`/`, {
      signal: controller.signal,
    });
    return data.data;
  } catch (error) {
    console.error("Помилка при отриманні даних:", error);
  }
};

export const getEventID = async (eventId, controller) => {
  try {
    const { data } = await axios.get(`/${eventId}`, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    console.error("Помилка при отриманні даних по :id", error);
  }
};

export const changeEvent = async (eventId, controller, updateEvent) => {
  try {
    const { data } = await axios.put(`/${eventId}`, updateEvent, {
      signal: controller.signal,
    });
    return data.data;
  } catch (error) {
    console.error("Помилка при спробі зміні даних:", error);
  }
};
