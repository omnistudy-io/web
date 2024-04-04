import "./OmniStudy.css";

import WebRouter from "./web/Router";
import AppRouter from "./app/Router";
import { Routes, Route } from "react-router-dom";

function OmniStudy() {
  return (
    <div className="App">
      <Routes>
        {/* WebStatic refers to the static informational website */}
        <Route path="/*" element={<WebRouter />}></Route>
        {/* WebApp refers to the actual application of the platform */}
        <Route path="/app/*" element={<AppRouter />}></Route>
      </Routes>
    </div>
  );
}

export default OmniStudy;
