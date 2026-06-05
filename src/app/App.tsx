import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div className="desktop-preview">
      <div className="mobile-shell">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}