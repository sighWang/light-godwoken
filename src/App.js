import "antd/dist/antd.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Provider as LightGodwokenProvider } from "./contexts/LightGodwokenContext";
import RequestWithdrawal from "./views/RequestWithdrawal";
import Withdrawal from "./views/Withdrawal";
import Deposit from "./views/Deposit";
import V1 from "./v1";

function App() {
  return (
    <LightGodwokenProvider>
      <Router>
        <Routes>
          <Route path=":version/" element={<Withdrawal />}></Route>
          <Route path=":version/request-withdrawal" element={<RequestWithdrawal />}></Route>
          <Route path=":version/deposit" element={<Deposit />}></Route>
        </Routes>
      </Router>
    </LightGodwokenProvider>
  );
}

export default App;
