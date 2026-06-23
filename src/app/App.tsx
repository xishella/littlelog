import { RouterProvider } from "react-router";
import { AppStateProvider } from "./state/AppState";
import { router } from "./routes";

export default function App() {
  return (
    <AppStateProvider>
      <div className="desktop-preview">
        <div className="mobile-shell">
          <RouterProvider router={router} />
        </div>
      </div>
    </AppStateProvider>
  );
}
