import { Outlet } from "react-router";
import { Navbar } from "../components";

function MainLayout() {
  return (
    <div className="dark-theme">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;