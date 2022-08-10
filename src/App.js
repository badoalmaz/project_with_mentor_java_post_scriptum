import AuthContextProvider from "./components/contexts/AuthContextProvider";
import ProductContextProvider from "./components/contexts/ProductContextProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
