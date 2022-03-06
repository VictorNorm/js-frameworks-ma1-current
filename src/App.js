import "./App.css";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Heading content="This is the Home page" />
        <Outlet />
      </main>
    </div>
  );
}
