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
          <div className="content-wrapper" style={{ marginLeft: '211px', width: 'calc(100% - 211px)', paddingRight:'80px' }}>
            <div className="content p-4">
              <AppRoutes />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
