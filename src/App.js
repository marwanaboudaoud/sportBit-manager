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
          <div className="content" style={{ marginLeft: '212px', marginTop: '78px', width: '100%' , paddingRight:'81px' }}>
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
