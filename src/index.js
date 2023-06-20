import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "react-tooltip/dist/react-tooltip.css";
import { InViewIDProvider } from "./provider/InViewIDProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <InViewIDProvider>
    <App />
  </InViewIDProvider>
);
