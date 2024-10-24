import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
import GlobalStyles from "./styles";

import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
library.add(fab, fas, far);
