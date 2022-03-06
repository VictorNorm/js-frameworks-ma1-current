import "./App.css";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import ImageSlider from "./components/slider/ImageSlider";
import { SliderData } from "./components/slider/SliderData";

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Heading content="This is the Home page" />
        <ImageSlider slides={SliderData} />
        <Outlet />
      </main>
    </div>
  );
}
