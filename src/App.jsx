import Navigation from "./navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Persons from "./pages/Persons";
import Roles from "./pages/Roles";
import Users from "./pages/Users";

export default function App() {
  return (
    <div>
      <Navigation />
    </div>
  );
}
