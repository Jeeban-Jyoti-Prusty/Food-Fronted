import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Page from "./pages/Page";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import BookTable from "./Components/BookTable";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminPanel from "./pages/AdminPanel";
import AdminProtectedRoute from "./pages/AdminProtectedRoute";
import Dashboard from "./Components/Dashboard";
import Food from "./Components/Food";
import AddFoodPage from "./pages/AddFoodPage";
import EditFoodPage from "./pages/EditFoodPage";
import DetailsPage from "./pages/DetailsPage";
import Order from "./pages/Order";
import Bookings from "./pages/Bookings";

function Layout() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <div style={{ marginTop: isAdminRoute ? "0px" : "120px" }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Page" element={<Page />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/BookTable" element={<BookTable />} />
          <Route path="/get-details/:id" element={<DetailsPage />} />
          <Route path="order" element={<Order />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminProtectedRoute />}>
            <Route path="" element={<AdminPanel />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="food" element={<Food />} />
              <Route path="add-food" element={<AddFoodPage />} />
              <Route path="edit/:id" element={<EditFoodPage />} />
              <Route path="/admin/booking" element={<Bookings />} />

            </Route>
          </Route>


        </Routes>

      </div>

      {!isAdminRoute && <Footer />}
    </>
  );
}


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>

    </>

  )
}

export default App;