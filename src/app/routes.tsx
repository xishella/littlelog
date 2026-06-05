import { createBrowserRouter, Outlet } from "react-router";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { TodayDashboard } from "./screens/TodayDashboard";
import { QuickLogScreen } from "./screens/QuickLogScreen";
import { LogDetailScreen } from "./screens/LogDetailScreen";
import { HandoffReadinessScreen } from "./screens/HandoffReadinessScreen";
import { HandoffSummaryScreen } from "./screens/HandoffSummaryScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import { HandoffNoteScreen } from "./screens/HandoffNoteScreen";
import { ImportantUpdateScreen } from "./screens/ImportantUpdateScreen";
import { EditSummaryScreen } from "./screens/EditSummaryScreen";
import { LogSleepScreen } from "./screens/LogSleepScreen";
import { LogNursingScreen } from "./screens/LogNursingScreen";
import { LogDiaperScreen } from "./screens/LogDiaperScreen";
import { LogSolidScreen } from "./screens/LogSolidScreen";
import { LogMedicineScreen } from "./screens/LogMedicineScreen";
import { LogMoodScreen } from "./screens/LogMoodScreen";
import { AddPhotoScreen } from "./screens/AddPhotoScreen";

function Root() {
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    ErrorBoundary: NotFoundScreen,
    children: [
      {
        index: true,
        Component: WelcomeScreen,
      },
      {
        path: "dashboard",
        Component: TodayDashboard,
      },
      {
        path: "log",
        Component: QuickLogScreen,
      },
      {
        path: "log/sleep",
        Component: LogSleepScreen,
      },
      {
        path: "log/bottle",
        Component: LogDetailScreen,
      },
      {
        path: "log/nursing",
        Component: LogNursingScreen,
      },
      {
        path: "log/diaper",
        Component: LogDiaperScreen,
      },
      {
        path: "log/solid",
        Component: LogSolidScreen,
      },
      {
        path: "log/medicine",
        Component: LogMedicineScreen,
      },
      {
        path: "log/mood",
        Component: LogMoodScreen,
      },
      {
        path: "log/note",
        Component: HandoffNoteScreen,
      },
      {
        path: "log/photo",
        Component: AddPhotoScreen,
      },
      {
        path: "handoff-ready",
        Component: HandoffReadinessScreen,
      },
      {
        path: "handoff-summary",
        Component: HandoffSummaryScreen,
      },
      {
        path: "profile",
        Component: ProfileScreen,
      },
      {
        path: "handoff-note",
        Component: HandoffNoteScreen,
      },
      {
        path: "important-update",
        Component: ImportantUpdateScreen,
      },
      {
        path: "edit-summary",
        Component: EditSummaryScreen,
      },
      {
        path: "*",
        Component: NotFoundScreen,
      },
    ],
  },
]);
