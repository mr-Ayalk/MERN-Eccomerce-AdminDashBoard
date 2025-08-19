import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import { createContext, forwardRef, useState } from "react";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignIn";
import Products from "./Components/Products/Products";
import AddProduct from "./Components/Products/AddProduct";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Slide from "@mui/material/Slide";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const MyContext = createContext();
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIslogin] = useState(false);
  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    model: "",
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <MyContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`overflow-hidden sidebarWrapper transition-all duration-500 ease-in-out 
    ${isSidebarOpen ? "w-[18%] " : "w-[0%] px-0 opacity-0"}`}
            >
              <Sidebar />
            </div>

            <div
              className={`contentRight py-4 px-5 transition-all duration-500 ease-in-out ${
                isSidebarOpen ? "w-[82%] " : "w-[100%] "
              }`}
            >
              <Dashboard />
            </div>
          </div>
        </section>
        // </MyContext.Provider>
      ),
    },
    {
      path: "/login",
      exact: true,
      element: <Login />,
    },
    {
      path: "/signup",
      exact: true,
      element: <SignUp />,
    },
    {
      path: "/products",
      element: (
        // <MyContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`overflow-hidden sidebarWrapper transition-all duration-500 ease-in-out 
    ${isSidebarOpen ? "w-[18%] " : "w-[0%] px-0 opacity-0"}`}
            >
              <Sidebar />
            </div>

            <div
              className={`contentRight !bg-gray-50 py-4 px-5 transition-all duration-500 ease-in-out ${
                isSidebarOpen ? "w-[82%] " : "w-[100%] "
              }`}
            >
              <Products />
            </div>
          </div>
        </section>
        // </MyContext.Provider>
      ),
    },

    // {
    //   path: "/products/upload",
    //   exact: true,
    //   element: <AddProduct />,
    // },
  ]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIslogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />

        <Dialog
          fullScreen
          open={isOpenFullScreenPanel.open}
          onClose={() =>
            setIsOpenFullScreenPanel({
              open: false,
            })
          }
          slots={{
            transition: Transition,
          }}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() =>
                  setIsOpenFullScreenPanel({
                    open: false,
                  })
                }
                aria-label="close"
              >
                <IoMdClose className="text-gray-800" />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <span className="text-gray-800">
                  {isOpenFullScreenPanel?.model}
                </span>
              </Typography>
            </Toolbar>
          </AppBar>

          {isOpenFullScreenPanel?.model === "Add Product" && <AddProduct />}
        </Dialog>
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
