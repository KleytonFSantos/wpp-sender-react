import { Routes, Route } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import { CreateMessage } from "./views/CreateMessage";
import { Home } from "./views/Home";
import { ShowMessages } from "./views/ShowMessages";

export const App = () => {
  return (
    <>
      <Navbar fixed />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-message" element={<CreateMessage />} />
        <Route path="/messages" element={<ShowMessages />} />
      </Routes>
    </>
  );
};
