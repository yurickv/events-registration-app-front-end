import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/homePage";
import EventDetail from "./pages/EventDetail/eventsPage";
import NewMember from "./pages/NewMember/newMemberPage";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/add-member/:id" element={<NewMember />} />
        <Route path="/event-detail/:id" element={<EventDetail />} />
        <Route path="*" index element={<Home />} />
      </Route>
    </Routes>
  );
};
