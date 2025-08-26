import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <AppRoutes />
    </Provider>
  );
};

export default App;
