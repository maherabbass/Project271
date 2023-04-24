import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Store from "./pages/Store";
import CartProvider from "./cartContext";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import { Container } from "react-bootstrap";

function App() {
  return (
    <CartProvider>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              caseSensitive={false}
              path="/main"
              element={<Main />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              caseSensitive={false}
              path="/login"
              element={<Login />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              caseSensitive={false}
              path="/menu"
              element={<Store />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              caseSensitive={false}
              path="/cancel"
              element={<Cancel />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              caseSensitive={false}
              path="/success"
              element={<Success />}
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
