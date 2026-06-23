import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { SplashScreen } from "./screens/SplashScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { LogScreen } from "./screens/LogScreen";
import { LogDetailScreen } from "./screens/LogDetailScreen";
import { HandoffScreen } from "./screens/HandoffScreen";
import { PreviewScreen } from "./screens/PreviewScreen";
import { EditNoteScreen } from "./screens/EditNoteScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ChildInfoScreen } from "./screens/ChildInfoScreen";
import { EditProfileScreen } from "./screens/EditProfileScreen";
import { NotificationsScreen } from "./screens/NotificationsScreen";
import { PrivacyScreen } from "./screens/PrivacyScreen";
import { NotFoundScreen } from "./screens/NotFoundScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: NotFoundScreen,
    children: [
      { index: true, Component: SplashScreen },
      { path: "home", Component: HomeScreen },
      { path: "log", Component: LogScreen },
      { path: "log/:type", Component: LogDetailScreen },
      { path: "handoff", Component: HandoffScreen },
      { path: "preview", Component: PreviewScreen },
      { path: "edit-note", Component: EditNoteScreen },
      { path: "profile", Component: ProfileScreen },
      { path: "child-info", Component: ChildInfoScreen },
      { path: "edit-profile", Component: EditProfileScreen },
      { path: "notifications", Component: NotificationsScreen },
      { path: "privacy", Component: PrivacyScreen },
      { path: "*", Component: NotFoundScreen },
    ],
  },
]);
