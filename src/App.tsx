import { Home, Property, SingleProperty, SingleOportunity } from "./Pages";
import { HomeAdmin } from "./Pages/Admin";
import { CreateOportunity } from "./Pages/User";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { userAuth, adminAuth } from "./Guards";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/single-property/:id" element={<SingleProperty />} />
        <Route path="/single-oportunity/:id" element={<SingleOportunity />} />
        <Route element={<ProtectedRoutes />}></Route>
        <Route element={<AdminProtectedRoutes />}>
          <Route path="/admin" element={<HomeAdmin />} />
        </Route>
        <Route element={<UserProtectedRoutes />}>
          <Route path="/create-oportunities" element={<CreateOportunity />} />
        </Route>
      </Routes>
    </Provider>
  );
}

const ProtectedRoutes = () => {
  const isAuth = userAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

const UserProtectedRoutes = () => {
  const isAuth = userAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

const AdminProtectedRoutes = () => {
  const isAdmin = adminAuth();
  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default App;
