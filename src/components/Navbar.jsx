import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  return (
    <nav className="bg-base-200">
      <div className="align-elements navbar py-4">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn bg-base-content text-base-100 hover:bg-base-300 hover:text-base-content  items-center jus text-3xl btn-circle"
          >
            L
          </NavLink>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box w-52 mt-3 z-30 p-2 shadow bg-base-200"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center ">
          <NavLink
            to="/"
            className="lg:hidden btn bg-base-content text-base-100 hover:bg-base-300 hover:text-base-content  items-center jus text-3xl btn-circle"
          >
            L
          </NavLink>
          <ul className="menu menu-horizontal hidden lg:flex gap-4 text-base">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate btn btn-ghost btn-circle btn-md ml-4">
            <input type="checkbox" onChange={handleTheme} />
            <BsMoonFill className="swap-off h-4 w-4 " />
            <BsSunFill className="swap-on h-4 w-4 " />
          </label>
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm  badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
