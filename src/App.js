import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateAdmin from "./Pages/User Management/CreateAdmin";
import CreateEmployee from "./Pages/User Management/CreateEmployee";
import CreateRiskCoordinator from "./Pages/User Management/CreateRiskCoordinator";
import AdminActivity from "./Pages/Super Admin/AdminActivity";
import AllCases from "./Pages/Super Admin/AllCases";
import AssignCases from "./Pages/Super Admin/AssignCases";
import PendingCases from "./Pages/Super Admin/PendingCases";
import Policy from "./Pages/CMS/Policy";
import Term from "./Pages/CMS/Term";
import Login from "./AuthPages/Login";
import Signup from "./AuthPages/Signup";
import Forget from "./AuthPages/Forget";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Forget" element={<Forget />} />
          {/* User Management */}
          <Route
            path="/Create-Admin"
            element={
              <Sidebar>
                <CreateAdmin />
              </Sidebar>
            }
          />
          <Route
            path="/Create-Employee"
            element={
              <Sidebar>
                <CreateEmployee />
              </Sidebar>
            }
          />
          <Route
            path="/Create-Risk-Coordinator"
            element={
              <Sidebar>
                <CreateRiskCoordinator />
              </Sidebar>
            }
          />
          {/* User Management */}
          {/* Super Admin */}

          <Route
            path="/Admin-Activity"
            element={
              <Sidebar>
                <AdminActivity />
              </Sidebar>
            }
          />
          {/* Admin Activity */}
          <Route
            path="/All-Cases"
            element={
              <Sidebar>
                <AllCases />
              </Sidebar>
            }
          />

          <Route
            path="/Assign-Cases"
            element={
              <Sidebar>
                <AssignCases />
              </Sidebar>
            }
          />

          <Route
            path="/Pending-Cases"
            element={
              <Sidebar>
                <PendingCases />
              </Sidebar>
            }
          />
          {/* Super Admin */}

          {/* cms */}

          <Route
            path="/Policy"
            element={
              <Sidebar>
                <Policy />
              </Sidebar>
            }
          />
          <Route
            path="/Term"
            element={
              <Sidebar>
                <Term />
              </Sidebar>
            }
          />

          {/* <Route
            path="/Pending-Cases"
            element={
              <Sidebar>
                <PendingCases />
              </Sidebar>
            }
          /> */}
          {/* cms */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
