import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./shared.css";

export const SharedLayout = () => {
  return (
    <div className="container">
      <header className="header-navigation">
        <p>Let's discover the events!</p>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
