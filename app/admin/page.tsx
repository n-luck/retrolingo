import { redirect } from "next/navigation";
import AdminPage from "./admin";
import { isAdmin } from "@/lib/admin";

const AdminPageWrapper = () => {
  if (!isAdmin) redirect("/");
  
  return <AdminPage />;
};

export default AdminPageWrapper;
