// import logo from "./logo.svg";
import "./App.css";
import Navbar_staff from "./layout/navbar/staff/navbar_staff";
import Nav_sidebar_staff from "./layout/nav_sidebar_staff";
import Sidebar_staff from "./layout/sidebar/staff/sidebar_staff";
import Private_route from "./route/private_route";

function App() {
  return (
    <div>
      <Private_route />
    </div>
  );
}

export default App;
