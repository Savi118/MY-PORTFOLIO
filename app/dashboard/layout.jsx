import DashboardClient from "./DashboardClient";

export const metadata = {
  title: "Admin Dashboard",
};

export default function DashboardLayout({ children }) {
  return <DashboardClient>{children}</DashboardClient>;
}
