import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import { createContext, useState } from "react";
const MyContext = createContext();
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MyContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              {/* <div
                className={`overflow-hidden sidebarWrapper ${
                  isSidebarOpen
                    ? "w-[18%]"
                    : "w-[0px] hidden transition-all "
                }`}
              >
                <Sidebar />
              </div> */}
              <div
                className={`overflow-hidden sidebarWrapper transition-all duration-500 ease-in-out 
    ${isSidebarOpen ? "w-[18%] " : "w-[0%] px-0"}`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen
                    ? "w-[82%]"
                    : "w-[100%] transition-all duration-500 ease-in-out"
                }`}
              >
                <Dashboard />
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
