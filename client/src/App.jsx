import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Store from "./pages/Store";
import Error from "./pages/Error";
import Thankyou from "./pages/Thankyou";
import AdminUsers from "./pages/admin-Users";
import AdminContacts from "./pages/admin-Contacts";
import AdminUpdate from "./pages/admin-Update";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AdminLayout from "./Components/layouts/admin-layout";
import Access from "./pages/Access";

// react-router-dom is used to create URLs for different web pages

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<Error />} />
        <Route path="/accessdenied" element={<Access />} />
        <Route path="/thankyou" element={<Thankyou />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers/>} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

// If we export a component using "export default ___", we import it without using curly braces. If we export it with "export" keyword directly when declaring the function, we import it using curly braces.
