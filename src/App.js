import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import SignUp from "./SignUp";
import RegForm from "./pages/vehicleregistration";
import RnR from "./pages/rulesandregulations";
import Infopage from "./admin pages/Infopage";
import Edit from "./admin pages/EditPIF";
import Approval from "./admin pages/approvalpage";
import ViewRequest from "./admin pages/viewrequest";
import ViewInfo from "./admin pages/viewinformation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element= {<Login/>}></Route>
          <Route path="/login" element= {<Login/>}></Route>
          <Route path="/signup" element= {<SignUp/>}></Route>
          <Route path="user/vehicle_registration" element= {<RegForm/>}></Route>
          <Route path="user/rules_and_regulations" element= {<RnR/>}></Route>
          <Route path="admin/approval" element= {<Approval/>}></Route>
          <Route path="admin/information" element= {<Infopage/>}></Route>
          <Route path="admin/:AID/edit" element= {<Edit/>}></Route>
          <Route path="admin/:AID/viewrequest" element={<ViewRequest/>}></Route>
          <Route path="admin/:AID/viewinfo" element={<ViewInfo/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
