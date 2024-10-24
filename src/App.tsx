import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyles from "./styles";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
