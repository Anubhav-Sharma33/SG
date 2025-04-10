import Logo from "./Logo";
import Menu from "./Menu";
import Toggler from "./Toggler";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow">
      <div className="w-full px-5 lg:w-[91%] lg:px-3 max-w-[1340px] m-auto flex justify-between">
        <Logo src = {"https://sar.ecis.in/api/starestate/star_estate/projects/2025-02-25_16-33-05_logo.webp"}/>
        <Menu />
        <Toggler/>
        <Logo src = {"https://www.starestate.com/assets/images/logo-starestate.webp"}/>
      </div>
    </div>
  );
};

export default Navbar;
