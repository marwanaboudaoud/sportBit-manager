import "./assets/scss/app.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "./components/layout/Sidebar";
import { TopNavbar } from "./components/layout/TopNavbar";
import { AppRoutes } from "./components/Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavbar />
        <div className="d-flex">
          <Sidebar />
          <div className="content-wrapper" >
            <div className="content">
              <AppRoutes />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
