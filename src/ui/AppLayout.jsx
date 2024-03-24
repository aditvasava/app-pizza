import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <div className="layout">
      {loading && <Loader />}
      <Header />

      <main style={{ border: "2px solid red" }}>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
