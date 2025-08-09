import { Link } from "react-router-dom";
import Logo from "../Logo";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar fixed top-0 left-0 bg-[#fff] w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-2">
        <div className="py-2 w-full">
          <Link to="/">
            {/* <img src="" alt="" /> */}
            <Logo
              className="text-emerald-950"
              spanDesign="group-hover:text-[#063c28] "
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
