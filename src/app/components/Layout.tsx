import { Outlet } from "react-router";
import { SignOutModal } from "./modals/SignOutModal";
import { ConfirmShareModal } from "./modals/ConfirmShareModal";
import { ShareSheet } from "./modals/ShareSheet";
import { CustomizeSheet } from "./modals/CustomizeSheet";

// Root layout: renders the active route plus any global overlays.
export function Layout() {
  return (
    <>
      <Outlet />
      <SignOutModal />
      <ConfirmShareModal />
      <ShareSheet />
      <CustomizeSheet />
    </>
  );
}
