import { Route, Routes } from "react-router-dom";
import Home from "../layouts/Home/Home";
import Dashboard from "../layouts/Dashboard/Dashboard";
import About from "../layouts/About/About";
import AboutList from "../layouts/About/AboutList";
import AboutAdd from "../layouts/About/AboutAdd";
import Contact from "../layouts/Contact/Contact";
import Error from "../layouts/Error/Error";

function Router(props) {
  return (
    <Routes>
      <Route element={<Home />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />}>
          <Route path="list" element={<AboutList />} />
          <Route path="add" element={<AboutAdd />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
      </Route>
    </Routes>
  );
}
export default Router;
