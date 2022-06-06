import React from "react";
import { createRoot } from "react-dom/client";
import NoteApp from "./components/NoteApp";

// initial style
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));
root.render(<NoteApp />);
