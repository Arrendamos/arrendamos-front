import { Home, Property, SingleProperty,InProgress } from './Pages';
import { HomeAdmin, CreatePropertyAdmin } from './Pages/Admin';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { userAuth, adminAuth } from './Guards';
import { Provider } from "react-redux";
import { store } from "./redux/store";

import './App.css';

function App() {

  return (
    <Provider store={store}>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<InProgress />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/property" element={<Property />} />
        <Route path="/single-property/:id" element={<SingleProperty />} />
        <Route element={<ProtectedRoutes />}>
        </Route>
        <Route element={<AdminProtectedRoutes />}>
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/create-property" element={<CreatePropertyAdmin />} />
        </Route>
      </Routes>
    </Provider>
  );
}

const ProtectedRoutes = () => {
  const isAuth = userAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

const AdminProtectedRoutes = () => {
  const isAuth = userAuth();
  const isAdmin = adminAuth();
  return isAuth && isAdmin ? <Outlet /> : <Navigate to="/" />;
}

export default App;
