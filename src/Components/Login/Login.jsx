import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Button } from "@mui/material";
import { CgLogIn } from "react-icons/cg";

const Login = () => {
  return (
    <section className="bg-white">
      <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
        <Link to={"/"}>
          <Logo
            className="text-emerald-950"
            spanDesign="group-hover:text-[#063c28] "
          />
        </Link>
        <div className="flex items-center gap-4">
          <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5">
            <CgLogIn />
            Login
          </Button>
        </div>
      </header>
      {/* <img src="" alt="" className="w-full fixed top-0 left-0 opacity-0" /> */}
    </section>
  );
};

export default Login;
