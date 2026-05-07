import "./localization/index.ts";
import "./main.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { loadFuels, loadRecipes, loadStacks } from "@/common/loadData.ts";
import { store } from "@/store";

import App from "./App.tsx";

async function bootstrap() {
  await Promise.all([loadFuels(), loadStacks(), loadRecipes()]);

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <ToastContainer
          autoClose={6000}
          draggable
          toastClassName="styled_toaster"
          progressClassName="progress_toaster_bar"
          closeButton={false}
        />
        <App />
      </Provider>
    </StrictMode>,
  );
}

bootstrap();
