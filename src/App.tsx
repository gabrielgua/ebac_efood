import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
import GlobalStyles from "./styles";

import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <AppRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
library.add(fab, fas, far);
