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
            <Navbar />
            <Box sx={{ marginLeft: "15vw" }}>
              <MainRoutes />
            </Box>
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
