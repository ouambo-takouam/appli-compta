import { ReactNode } from "react";
import Sidebar from "@components/sidebar.component";
import Topbar from "@components/topbar.component";

export default function OnBoardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <Topbar />
      {children}
    </>
  );
}
