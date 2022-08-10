import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import {Box} from '@mui/material'

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <Navbar />
          <Box sx={{marginLeft: '15vw'}}>
            <MainRoutes />
          </Box>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
