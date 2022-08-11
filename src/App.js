import AuthContextProvider from "./components/contexts/AuthContextProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import {Box} from '@mui/material'
import CartContextProvider from "./components/contexts/CartContextProvider";
import ProductContextProvider from "./components/contexts/ProductContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Navbar />
            <MainRoutes />
            <Box sx={{marginLeft: '15vw'}}>
             <MainRoutes />
            </Box>
            <Footer /> 
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
