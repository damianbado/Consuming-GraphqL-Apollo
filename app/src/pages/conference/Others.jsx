import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// export function Others() {
//   return (
// <Switch>
//   <Route path="/" element={<Layout />}>
//     <Route path="invoices" element={<Invoices />} />
//     <Route path="dashboard" element={<Dashboard />} />
//   </Route>
// </Switch>
//   );
// }

export function Others() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="invoices">Invoices</Link> |{" "}
        <Link to="dashboard">Dashboard</Link>
      </nav>
      {/* <div className="content">
        <Outlet />
      </div> */}
    </div>
  );
}

export function Invoices() {
  return <h1>Invoices</h1>;
}

export function Dashboard() {
  return <h1>Dashboard</h1>;
}
