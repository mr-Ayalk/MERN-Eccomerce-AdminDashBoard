import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignIn";
import Products from "./Components/Products/Products";
const MyContext = createContext();
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIslogin] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MyContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
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
        </MyContext.Provider>
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
        <MyContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
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
                <Products />
              </div>
            </div>
          </section>
        </MyContext.Provider>
      ),
    },
  ]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIslogin,
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
