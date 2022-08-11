import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import { Box } from "@mui/material";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <Box sx={{width: '15%'}}>
                <Navbar />
              </Box>
              <Box sx={{width: '80%'}}>
                <MainRoutes />
              </Box>
            </Box>
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
