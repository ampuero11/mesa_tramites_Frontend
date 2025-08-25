import { Outlet } from "react-router-dom";
import LandingHeader from "../components/LandingHeader";
import LandingFooter from "../components/LandingFooter";

const LandingLayout: React.FC = () => {
  return (
    <div className="landing-layout">
      <LandingHeader />
      <main className="">
        <Outlet />
      </main>
      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
